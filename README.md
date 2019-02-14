# Strongholds and Followers Framework

Framework for running Strongholds and followers in roll20 VTT

This is a character sheet for use with MCDM's Strongholds and followers ruleset and a Roll20 pro account, it is not an API script. I advise creating a second game on roll20 to run the strongholds and followers side of the game, recording the character effects and stronghold effects separately. This way is a bit more work but you can use api scripts like Lazy calendar to keep time synced between games.

To install you need to navigate to your game settings page. Set the character sheet to custom. Copy they above .html file content into the html tab. Then copy the .css file content into the css tab. Click save then load up your game.

Current Features are:

## Unit tab
* Rollable buttons for attack, power and morale save. These are currently set to always roll twice, I personally prefer this as you can decide after the fact if you rolled with advantage or disadvantage without slowing down the combat. This may change in the future based on feedback. 
* Traits and orders repeating section.
* An actions section where you can create a rollable macro based on variable inputs useful for battle magic.

## Stronghold tab
* Sections for keeping track of the stronghold stats, artisans and demesne effects.

## Province tab
* Places for logging stats
* Automatically calculated values for reseources and income.


You can see the sheet in action in this open game https://app.roll20.net/join/4198226/jujBPA


# Provinces 

nb. These are my place holder rules for managing provinces. When the Kingdoms and Warfare book is released I will update the sheet to reflect those rules.  

Provinces are areas of land (or sea) under the governance of a single entity say a Duke or a Count. That entity may be beholden to another say a King or an Emperor or may not be if it is a city state. This may contain a mixture of strongholds, population centers, and strategic resources. Changes to provinces happen over the period of multiple months or seasons to use the Strongholds and Followers vernacular with some changes happening iver the space of the year. Each province has one or more Power Centre such as a house of parliament or moot it could even be a specific pirate ship. 

## General Attributes

<b>Population.</b> An abstracted measure of population which has a number and a dice ranging from d4 to d12. A small province of a few thousand people might have a population of 3 which would mean its population dice is a d4. A populous city might have a population of 11 and a dice that could contain it so a d12. A Megacity or giant metropolis could have a population 15 but the max di size for population is a d12. This comes in to play when you are trying to increase your population.

<b>Unrest.</b> A measure of how satisfied the citizenry are this can be affected by incessant levies, lack of food, presence of foreign actors such as a nearby barbarian camp.

<b>Development.</b> How developed the province is, 0 being a free for all wilderness and 5 being a province with well built roads and managed monsters and wildlife. It effects how quickly units can move throughout the province and how much upkeep is required for maintenance and how much each worked resource produces.

<b>Law.</b> Represents the potential forces that can be used to combat unrest. Law also applies a bonus to the morale of levied forces.

### Developing your Province

How a province begins is not its fate, you can invest time money and resources to increase development and law as well as the resources within the province. Population and unrest are increased in a different way.

<b>Population</b> Takes longer to increase and isn't guaranteed. At the end of a year you can roll your population di if you roll above your current population your population increases by one. You can add a modifier to the roll by sacrificing stockpiled food. You can add up to 3 to the roll a +1 requires 1 food, a +2 requires 3 food, and a +3 requires 6 food.

<b>Unrest</b> can increase based on external factors, such as the presence of barbarian camps. Unrest can also increase if you end a season with less food than your population, you increase taxes for a season, or if you levy the population more than once in a year. Reducing unrest requires you to make an unrest check at the end of a season. The DC is 10 + current unrest + current population and the check is 1d20 + Law + Development. 

Increasing the <b>Development</b> of your province involves creating and maintaining new roads and the infrastructure to maintain communication throughout the land like stabled horses for relaying messages (or other communication methods, in a high fantasy setting stationing people who can cast sending would fill a similar role.) You must spend 10000 gp, 5 stone, wood, and metal for each level of development you are increasing to i.e. to go from development 1 to 2 you need 20000 gp and 10 stone, wood and metal. The resources and gold are subtracted from your stockpile instantly and the upgrade takes place over 2 seasons.

Increasing the <b>Law</b> is a matter of investing a one time fee and then a repeating upkeep depending on your population. The upkeep is equal to your law level x your population x 500gp See table below. 

<table class="tg">
  <tr>
    <th class="tg-0lax">Law</th>
    <th class="tg-0lax">Cost (gp)</th>
    <th class="tg-0lax">Morale Bonus to levy</th>
  </tr>
  <tr>
    <td class="tg-0lax">1</td>
    <td class="tg-0lax">10,000</td>
    <td class="tg-0lax">1</td>
  </tr>
    <tr>
    <td class="tg-0lax">2</td>
    <td class="tg-0lax">20,000</td>
    <td class="tg-0lax">2</td>
  </tr>
  <tr>
    <td class="tg-0lax">3</td>
    <td class="tg-0lax">30,000</td>
    <td class="tg-0lax">3</td>
  </tr>
  <tr>
    <td class="tg-0lax">4</td>
    <td class="tg-0lax">40,000</td>
    <td class="tg-0lax">4</td>
  </tr>
  <tr>
    <td class="tg-0lax">5</td>
    <td class="tg-0lax">50,000</td>
    <td class="tg-0lax">5</td>
  </tr>
</table>

<b>Resources</b> can be upgraded as seen in the resource table. Upgrading a resource increases the quantity gained from working that resource. When stockpiled resources lose their individual values. 

<b>Taxation</b> at the end of every season your population generate revenue that you, as ruler. Get to tax. The amount of revenue the province creates is proportional to the development and obviously the size of the population. 

## Power Centres

Contain the key infrastructure for administering a province, such as the parliament, council or palace. Occupying the majority of power centres of a province means you control the province and gain any resources or taxes generated. Power centres can be located in a single town or city or spread throughout the province. There are benfits to both.

## Resources

Are features of the geography such as metal or stone deposits that can be mined, river and coast that can be fished, or areas of arable land that can be farmed. Resources can be worked by the population over the course a season to generate that resource. They can then be stockpiled and used to upgrade the province or they can be traded away to other provinces to generate revenue. The value is a multiplier for how much each unit is worth. Quantity is how many units are produced when worked.

### Resource table
You can manually create resources based on the geography and history of the province or you can roll using the table below.

<table class="tg">
  <tr>
    <th class="tg-0lax" style="align-centre">d100</th>
    <th class="tg-0lax">Resource</th>
    <th class="tg-0lax">Quantity</th>
    <th class="tg-0lax">Value per unit (x100gp)</th>
    <th class="tg-0lax">Upgrade</th>
  </tr>
  <tr>
    <td class="tg-0lax">00-40</td>
    <td class="tg-0lax">Food</td>
    <td class="tg-0lax">1d6</td>
    <td class="tg-0lax">d4</td>
    <td class="tg-0lax">1000gp per level</td>
  </tr>
  <tr>
    <td class="tg-0lax">41-55</td>
    <td class="tg-0lax">Metal</td>
    <td class="tg-0lax">1d8</td>
    <td class="tg-0lax">d10</td>
    <td class="tg-0lax">2000gp per level</td>
  </tr>
  <tr>
    <td class="tg-0lax">56-75</td>
    <td class="tg-0lax">Stone</td>
    <td class="tg-0lax">1d10</td>
    <td class="tg-0lax">d8</td>
    <td class="tg-0lax">3000gp per level</td>
  </tr>
    <tr>
    <td class="tg-0lax">76-95</td>
    <td class="tg-0lax">Wood</td>
    <td class="tg-0lax">1d6</td>
    <td class="tg-0lax">d6</td>
    <td class="tg-0lax">2000gp per level</td>
  </tr>
    <tr>
    <td class="tg-0lax">96-99</td>
    <td class="tg-0lax">Exotic</td>
    <td class="tg-0lax">d4</td>
    <td class="tg-0lax">d20 + 5</td>
    <td class="tg-0lax">10,000gp per level</td>
    
  </tr>
</table>

## Creating a Province

If you want to completely randomly create a province then choose how abundant resources are with a d12 the result is how many times you roll on the resource table.

After determining the resources you place them on a map, or not on a map your choice. Then you decide how the power structure works in your province whether it is centrally administered in a capital or spread throughout many towns as an organisation. Fortifying power centres with strongholds is probably a good idea.

## Spending your Resources

As a leader of a province you can establish new strongholds. As you have ready access to command workers and a stockpile of materials you may expend those rather than gold. A list of tyhe cost of each stronghold type is provided below.

<table class="tg">
  <tr>
    <th class="tg-0lax">Type</th>
    <th class="tg-0lax">Wood cost</th>
    <th class="tg-0lax">Stone cost</th>
    <th class="tg-0lax">Metal cost</th>
    <th class="tg-0lax">Exotic cost</th>
  </tr>
      <tr>
    <td class="tg-0lax">Keep</td>
    <td class="tg-0lax">100</td>
    <td class="tg-0lax">200</td>
    <td class="tg-0lax">150</td>
    <td class="tg-0lax">50</td>
  </tr>
        <tr>
    <td class="tg-0lax">Temple</td>
    <td class="tg-0lax">100</td>
    <td class="tg-0lax">250</td>
    <td class="tg-0lax">100</td>
    <td class="tg-0lax">150</td>
  </tr>
        <tr>
    <td class="tg-0lax">Ship</td>
    <td class="tg-0lax">300</td>
    <td class="tg-0lax">50</td>
    <td class="tg-0lax">150</td>
    <td class="tg-0lax">25</td>
  </tr>
        <tr>
    <td class="tg-0lax">Establishment</td>
    <td class="tg-0lax">100</td>
    <td class="tg-0lax">50</td>
    <td class="tg-0lax">100</td>
    <td class="tg-0lax">175</td>
  </tr>
</table>

### Beginning of the Season

You assign your population to work resources. Remember you need to produce enough food to feed the people in order to keep unrest low and I suppose the people fed.

You can begin any upgrades that you have the resources for.

### End of the Season

Calculate the resources generated removing any that are traded away and add them to your stockpile.

Remove the food required for the population. If you do not have enough make an unrest check. If you fail unrest increases if you succeed population dimishes by one. You can gain advantage on the roll if you have non- levy units stationed in all of the power centres however they can not be used in combat outside that location for the following season.

Calculate any money generated by trade and add to the treasury. 

#### Taxes

The amount of tax you can levy from the population is proportional to the development of the province. population x development x 500gp. You can issue a decree to increase taxes for a season however this incurrs an unrest check with a dc of 10 + population + 1 for every 10% tax increase. For example if you increase your tax by 30% and you have a population of 4 you have to make a DC 17 unrest check, 10 + 4 from population and 3 from your law. An unrest check is a 1d20 + law + development.

Calculate the taxes and add to the treasury.

### End of the Year

Roll for you population increase, your population di + any food modifiers you wish to add. Then subtract the food from your stockpile if you used any whether successful or not.

If your unrest is greater than your law + development then the province is in rebellion, all food resources are worked no stockpiles are generated, taxes are not collected. Unrest decreases by one every season as long as the food generated is greater than the population.

Subtract any yearly outgoings such as law upkeep and the upkeep for maintenance of your province infrastructure 1000gp x development level.

