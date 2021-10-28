var main = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen"
];

var side = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls"
];



// When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category
// When the dish name appears, the cookpot icon disappears


//Materials
var sideRadioInput = document.querySelector('#side');
var mainRadioInput = document.querySelector('#main');
var dessertRadioInput = document.querySelector('#dessert');
var letsCookButton = document.querySelector('button');
var potPic = document.querySelector('img');
var emptyBoxSpace = document.querySelector('#empty-box')





// var meal = {
//   side: sideRadioInput.value,
//   main: mainRadioInput.value,
//   desserts: dessertRadioInput.value,
//   console.log(side);
// }
//EventListeners
// sideRadioInput.addEventListener();
// mainRadioInput.addEventListener();
// dessertRadioInput.addEventListener();

//Functions
// function chooseSide(array) {
//
// }
console.log(letsCookButton);
letsCookButton.addEventListener('click', chooseRecipe);

function chooseRecipe() {
if (sideRadioInput.checked) {
emptyBoxSpace.innerHTML = `<p class="recipe">${side[getRandomIndex(side)]}</p>`;
} else if (mainRadioInput.checked) {
emptyBoxSpace.innerHTML = `<p>${main[getRandomIndex(main)]}</p>`;
} else if (dessertRadioInput.checked) {
emptyBoxSpace.innerHTML = `<p>${main[getRandomIndex(main)]}</p>`;
}
}

//figure out how to disable a button
//change color of button if disabled
console.log(main[getRandomIndex(main)]);


console.log(side[getRandomIndex(side)]); //this works, I get the input



//meal.(userInput)[i]
//.checked <--- to see if a butting is checked
//the user clicks and picks a value
//the value has to make it so
//it picks a meal from that array

//getRandomIndex functions

//let's cook button is clicked
//puts one meal from array in other section

//Anything with user statement that requires and output

// Step 1
// - Add event listeners to all dish options.
//Maybe all the function that the event listener button does is return the input?
// Every button clicked, inputs a random dish on the
// empty box (section of HTML)

//You can also do .value on the query Selector


//Arrays of:

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
