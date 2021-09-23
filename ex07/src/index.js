function myFunction(pName){
// Only change code below this line
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    };
    delete lion[pName];
    return lion;
// Only change code above this line
}
myFunction("roar");
module.exports = myFunction;