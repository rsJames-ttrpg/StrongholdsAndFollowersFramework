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
        console.log("===== values of idarray: " + JSON.stringify(idarray) + " =====");
        for (var i = 0; i < idarray.length; i++) {
            getAttrs([`repeating_resources_${idarray[i]}_ResourceAssigned`, `repeating_resources_${idarray[i]}_ResourceType`, `repeating_resources_${idarray[i]}_ResourceQuantity`, `repeating_resources_${idarray[i]}_ResourceTraded`], function (v) {
                tmpAssinged = Object.values(v)[0].valueOf();
                tmpType = Object.values(v)[1].valueOf();
                tmpQuantity = Object.values(v)[2].valueOf();
                tmpTraded = Object.values(v)[3].valueOf();
                console.log("===============Assigned: " + tmpAssinged + " Type: " + tmpType + " Quantity: " + tmpQuantity + " Traded: " + tmpTraded);
                tmp = tmpAssinged * (tmpQuantity - tmpTraded);
                console.log("===============TempValue: " + tmp);
                console.log(tmpType == "Wood");
                if (tmpType == "Wood") { wood += tmp; console.log("======= Wood: " + wood); }
                else if (tmpType == "Stone") { stone += tmp; console.log("======= stone: " + stone); }
                else if (tmpType == "Metal") { metal += tmp; console.log("======= metal: " + metal); }
                else if (tmpType == "Exotic") { exotic += tmp; console.log("======= exotic: " + exotic); }
                else if (tmpType == "Food") { food += tmp; console.log("======= food: " + food); }
                if (i = idarray.length - 1) { setAttrs({ SeasonWood: wood, SeasonStone: stone, SeasonMetal: metal, SeasonExotic: exotic, SeasonFood: food }); }
            });
        };
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
