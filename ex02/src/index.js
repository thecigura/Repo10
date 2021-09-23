// Only change code below this line
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse",
}

function myFunction(myObj) {
    hatValue = myClothes.hat;
    shirtValue = myClothes.shirt;
    shoesValue = myClothes.shoes;
    return myObj;
}
// Only change code above this line
console.log(myFunction(myClothes)); // Change this line
module.exports = myFunction(myClothes);