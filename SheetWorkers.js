const repeatingSum = (destination, section, fields, multiplier = 1) => {
    if (!Array.isArray(fields)) fields = [fields];
    getSectionIDs(`repeating_${section}`, idArray => {
        const attrArray = idArray.reduce((m, id) => [...m, ...(fields.map(field => `repeating_${section}_${id}_${field}`))], []);
        getAttrs(attrArray, v => {
            console.log("===== values of v: " + JSON.stringify(v) + " =====");
            const getValue = (section, id, field) => parseFloat(v[`repeating_${section}_${id}_${field}`], 10) || 0; // default value of 1, so any faulty value inputs are ignored and the calculation still works.
            const sumTotal = idArray.reduce((total, id) => total + fields.reduce((subtotal, field) => subtotal * getValue(section, id, field), 1), 0);
            setAttrs({ [destination]: sumTotal * multiplier });
        });
    });
};

/*get seasonal resources*/
on('change:repeating_resources remove:repeating_resources', function () {
    var wood = 0, stone = 0, metal = 0, exotic = 0, food = 0;
    var tmpAssinged, tmpQuantity, tmpTraded;
    var tmpType;
    getSectionIDs("repeating_resources", idarray => {
        for (let i = 0; i < idarray.length; i++) {
            getAttrs([`repeating_resources_${idarray[i]}_ResourceAssigned`, `repeating_resources_${idarray[i]}_ResourceType`, `repeating_resources_${idarray[i]}_ResourceQuantity`, `repeating_resources_${idarray[i]}_ResourceTraded`], function (v) {
                tmpAssinged = Object.values(v)[0].valueOf();
                tmpType = Object.values(v)[1].valueOf();
                tmpQuantity = Object.values(v)[2].valueOf();
                tmpTraded = Object.values(v)[3].valueOf();
                tmp = tmpAssinged * (tmpQuantity - tmpTraded);
                if (tmpType == "Wood") { wood += tmp;  }
                else if (tmpType == "Stone") { stone += tmp; }
                else if (tmpType == "Metal") { metal += tmp;  }
                else if (tmpType == "Exotic") { exotic += tmp; }
                else if (tmpType == "Food") { food += tmp; }
                if (i == idarray.length -1 ) {setAttrs({ WorkWood: wood, WorkStone: stone, WorkMetal: metal, WorkExotic: exotic, WorkFood: food })}
            });
        } 
    });
});

on('change:repeating_imports remove:repeating_imports', function () {
    var wood = 0, stone = 0, metal = 0, exotic = 0, food = 0;
    var tmpQuantity;
    var tmpType;
    getSectionIDs("repeating_imports", idarray => {
        for (let i = 0; i < idarray.length; i++) {
            getAttrs([`repeating_imports_${idarray[i]}_ImportType`, `repeating_imports_${idarray[i]}_ImportQuantity`], function (v) {
                tmpType = Object.values(v)[0].valueOf();
                tmpQuantity = Object.values(v)[1].valueOf();
                tmp = 1 * (tmpQuantity);
                if (tmpType == "Wood") { wood += tmp;}
                else if (tmpType == "Stone") { stone += tmp;}
                else if (tmpType == "Metal") { metal += tmp;}
                else if (tmpType == "Exotic") { exotic += tmp;}
                else if (tmpType == "Food") { food += tmp;}
                if(i == idarray.length -1 ) {setAttrs({ ImportWood: wood, ImportStone: stone, ImportMetal: metal, ImportExotic: exotic, ImportFood: food })}
            });
        }
    })
});

on("change:WorkWood change:ImportWood", function () {  
        getAttrs(["WorkWood", "ImportWood"], function (values) {
        let wood = (parseInt(values.WorkWood) || 0) + (parseInt(values.ImportWood) || 0)  ;   // wrap this in a parseInt function if you need it to be a number
        setAttrs({
            SeasonWood: wood
        });
    });
});

on("change:WorkStone change:ImportStone", function () {  
    getAttrs(["WorkStone", "ImportStone"], function (values) {
    let stone = (parseInt(values.WorkStone) || 0) + (parseInt(values.ImportStone) || 0);    // like so
    setAttrs({
        SeasonStone: stone
    });
});
});
on("change:WorkMetal change:ImportMetal", function () {  
    getAttrs(["WorkMetal", "ImportMetal"], function (values) {
    let metal = (parseInt(values.WorkMetal) || 0)+ (parseInt(values.ImportMetal) || 0) ; 
    setAttrs({
        SeasonMetal: metal
    });
});
});
on("change:WorkExotic change:ImportExotic", function () {  
    getAttrs(["WorkExotic","ImportExotic"], function (values) {
    let exotic = (parseInt(values.WorkExotic) || 0)+ (parseInt(values.ImportExotic) || 0) ; 
    setAttrs({
        SeasonExotic: exotic
    });
});
});
on("change:WorkFood change:ImportFood", function () {  
    getAttrs(["WorkFood", "ImportFood"], function (values) {
    let food = (parseInt(values.WorkFood) || 0)+ (parseInt(values.ImportFood) || 0) ; 
    setAttrs({
        SeasonFood: food
    });
});
});
    


on('change:repeating_resources remove:repeating_resources', function () {
    repeatingSum("trade_total", "resources", ["ResourceAssigned", "ResourceTraded", "ResourceValue"]);
    repeatingSum("population_assigned", "resources", "ResourceAssigned");
});

on('change:repeating_resources remove:repeating_resources', function () {
    repeatingSum("season_wood", "resources", ["ResourceAssigned", "ResourceTraded", "ResourceValue"], "ResourceType", "Wood");
});

on('change:repeating_imports remove:repeating_imports', function () {
    repeatingSum("import_total", "imports", ["ImportQuantity", "ImportValue"]);
});

on("change:Development change:Population sheet:opened", function () {  //sheet:opened is optional, but is useful for some workers - the script runs every time the sheet opens.
    getAttrs(["Development", "Population"], function (values) {
        let Development = parseInt(values.Development) || 0;   // wrap this in a parseInt function if you need it to be a number
        let Population = parseInt(values.Population) || 0;    // like so
        var calcValue = Development * Population * 1000
        setAttrs({
            TaxRevenue: calcValue
        });
    });
});




/**Working* */
const repeatingSum = (destination, section, fields, multiplier = 1) => {
    if (!Array.isArray(fields)) fields = [fields];
    getSectionIDs(`repeating_${section}`, idArray => {
        const attrArray = idArray.reduce( (m,id) => [...m, ...(fields.map(field => `repeating_${section}_${id}_${field}`))],[]);
        getAttrs(attrArray, v => {
            console.log("===== values of v: "+ JSON.stringify(v) +" =====");
            const getValue = (section, id,field) => parseFloat(v[`repeating_${section}_${id}_${field}`], 10)||0; // default value of 1, so any faulty value inputs are ignored and the calculation still works.
            const sumTotal = idArray.reduce((total, id) => total + fields.reduce((subtotal,field) => subtotal * getValue(section, id,field),1),0);
            setAttrs({[destination]: sumTotal * multiplier});    
        });
    });
};

on('change:repeating_resources remove:repeating_resources', function() {
    repeatingSum("trade_total", "resources", ["ResourceAssigned", "ResourceTraded", "ResourceValue"]);
    repeatingSum("population_assigned", "resources", "ResourceAssigned");
});

on('change:repeating_imports remove:repeating_imports', function() {
    repeatingSum("import_total", "imports", [ "ImportQuantity", "ImportValue"]);
});

on("change:Development change:Population sheet:opened", function() {  //sheet:opened is optional, but is useful for some workers - the script runs every time the sheet opens.
    getAttrs(["Development","Population"], function(values) {
         let Development = parseInt(values.Development)||0;   // wrap this in a parseInt function if you need it to be a number
         let Population = parseInt(values.Population)||0;    // like so
            var calcValue = Development * Population * 1000
         setAttrs({ 
                 TaxRevenue: calcValue                          
         });
   });
 });


 /*get seasonal resources*/
 on('change:repeating_resources remove:repeating_resources', function () {
     var wood = 0, stone = 0, metal = 0, exotic = 0, food = 0;
     var tmpAssinged, tmpQuantity, tmpTraded;
     var tmpType;
     getSectionIDs("repeating_resources", idarray => {
         for (let i = 0; i < idarray.length; i++) {
             getAttrs([`repeating_resources_${idarray[i]}_ResourceAssigned`, `repeating_resources_${idarray[i]}_ResourceType`, `repeating_resources_${idarray[i]}_ResourceQuantity`, `repeating_resources_${idarray[i]}_ResourceTraded`], function (v) {
                 tmpAssinged = Object.values(v)[0].valueOf();
                 tmpType = Object.values(v)[1].valueOf();
                 tmpQuantity = Object.values(v)[2].valueOf();
                 tmpTraded = Object.values(v)[3].valueOf();
                 tmp = tmpAssinged * (tmpQuantity - tmpTraded);
                 if (tmpType == "Wood") { wood += tmp;  }
                 else if (tmpType == "Stone") { stone += tmp; }
                 else if (tmpType == "Metal") { metal += tmp;  }
                 else if (tmpType == "Exotic") { exotic += tmp; }
                 else if (tmpType == "Food") { food += tmp; }
                 if (i == idarray.length -1 ) {setAttrs({ WorkWood: wood, WorkStone: stone, WorkMetal: metal, WorkExotic: exotic, WorkFood: food })}
             });
         } 
     });
 });
              
 on('change:repeating_imports remove:repeating_imports', function () {
    var wood = 0, stone = 0, metal = 0, exotic = 0, food = 0;
    var tmpQuantity;
    var tmpType;
    getSectionIDs("repeating_imports", idarray => {
        for (let i = 0; i < idarray.length; i++) {
            getAttrs([`repeating_imports_${idarray[i]}_ImportType`, `repeating_imports_${idarray[i]}_ImportQuantity`], function (v) {
                tmpType = Object.values(v)[0].valueOf();
                tmpQuantity = Object.values(v)[1].valueOf();
                tmp = 1 * (tmpQuantity);
                if (tmpType == "Wood") { wood += tmp;}
                else if (tmpType == "Stone") { stone += tmp;}
                else if (tmpType == "Metal") { metal += tmp;}
                else if (tmpType == "Exotic") { exotic += tmp;}
                else if (tmpType == "Food") { food += tmp;}
                if(i == idarray.length -1 ) {setAttrs({ ImportWood: wood, ImportStone: stone, ImportMetal: metal, ImportExotic: exotic, ImportFood: food })}
            });
        }
    })
});                                                 
 on("change:WorkWood change:ImportWood", function () {  
         getAttrs(["WorkWood", "ImportWood"], function (values) {
         let wood = (parseInt(values.WorkWood) || 0) + (parseInt(values.ImportWood) || 0)  ;   // wrap this in a parseInt function if you need it to be a number
         setAttrs({
             SeasonWood: wood
         });
     });
 });
 
 on("change:WorkStone change:ImportStone", function () {  
     getAttrs(["WorkStone", "ImportStone"], function (values) {
     let stone = (parseInt(values.WorkStone) || 0) + (parseInt(values.ImportStone) || 0);    // like so
     setAttrs({
         SeasonStone: stone
     });
 });
 });
 on("change:WorkMetal change:ImportMetal", function () {  
     getAttrs(["WorkMetal", "ImportMetal"], function (values) {
     let metal = (parseInt(values.WorkMetal) || 0)+ (parseInt(values.ImportMetal) || 0) ; 
     setAttrs({
         SeasonMetal: metal
     });
 });
 });
 on("change:WorkExotic change:ImportExotic", function () {  
     getAttrs(["WorkExotic","ImportExotic"], function (values) {
     let exotic = (parseInt(values.WorkExotic) || 0)+ (parseInt(values.ImportExotic) || 0) ; 
     setAttrs({
         SeasonExotic: exotic
     });
 });
 });
 on("change:WorkFood change:ImportFood", function () {  
     getAttrs(["WorkFood", "ImportFood"], function (values) {
     let food = (parseInt(values.WorkFood) || 0)+ (parseInt(values.ImportFood) || 0) ; 
     setAttrs({
         SeasonFood: food
     });
 });
 });


 on("change:trade_total change:import_total change:TaxRevenue", function () {  
    getAttrs(["trade_total", "import_total", "TaxRevenue"], function (values) {
        let tmp = (parseInt(values.trade_total) || 0) - (parseInt(values.import_total) || 0) + (parseInt(values.TaxRevenue) || 0) ;  
    setAttrs({
        SeasonRevenue: tmp 
    });
});
});
