// Create lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
// End of lion object

function myFunction(pName, pValue) {
// Only change code below this line
    lion[pName] = pValue;
    return lion;
// Only change code above this line
}
myFunction("roar", "roar-roar");
module.exports = myFunction;