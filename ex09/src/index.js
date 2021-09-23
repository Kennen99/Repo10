function myFunction(myObj, checkProp){
    /// Only change code below this line
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }
    return "Not found";
    // Only change code above this line
}
module.exports = myFunction;