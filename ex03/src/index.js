// Only change code below this line
var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water",
}

function myFunction(myObj) {
    vegetableValue = myFood["vegetable"];
    fruitValue = myFood["fruit"];
    drinkValue = myFood["drink"];

    return myObj;
}
// Only change code above this line
console.log(myFunction(myFood)); // Change this line
module.exports = myFunction(myFood);