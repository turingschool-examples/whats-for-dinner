// When a user selects a dish option 
// and then clicks the “Let’s Cook!” button,
//  the user sees a random dish from the list of possible dishes for that category.

// add query selectors for inputs to pull in the html.
// needs an event listener for button.
var selectSide = document.querySelector("#side");
var letsCookButton = document.querySelector(".lets-cook-button");
var foodSelection = document.querySelector(".food-selection")
letsCookButton.addEventListener("click", getDish );

function getDish() {
if(document.getElementById("side").checked === true) {
    console.log(sides)
} else if(document.getElementById("main-dish").checked === true) {
    console.log(mains)
}

}
       


sides = ["Miso Glazed Carrots","Coleslaw","Garden Salad"]
mains = ["Spaghetti and Meatballs","Pineapple Chicken","Shakshuka"]








