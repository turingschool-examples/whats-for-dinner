var addRecipeButton = document.getElementByID('add-recipe-button');
var selectionForm = document.getElementByID('selection-form');
var userChoice = document.getElementsByName('radio-button');
var firstSelection = document.getElementByID('first-item');
var secondSelection = document.getElementByID('second-item');
var thirdSelection = document.getElementByID('third-item');
var fourthSelection = document.getElementByID('fourth-item');
var submitButton = document..getElementByID('submit-button');
var cookpot = document.getElementByID('cookpot');
var outputPrompt = document.getElementByID('you-should-make');
var selectionOutput = document.getElementByID('selection-output');
var clearButton = document.getElementByID('clear-selection-button');

var sides = ['Mac n Cheese', 'Coleslaw', 'Pinto Beans', 'Baked Beans', 'Green Beans', 'Fries', 'Fried Pickles', 'Fried Okra', 'Potato Salad', 'Small Salad'];

var mainDishes = ['Ribs', 'Sliced Brisket', 'Chopped Brisket', 'Balogna', 'Pulled Pork', 'Hot Links', 'Chicken'];

var desserts = ['Brownie', 'Cookie', 'Apple Pie', 'Peach Cobbler', 'Ice Cream', 'Banana Pudding', 'Carrot Cake'];

//Event listeners:
addRecipeButton.addEventListener('click', addRecipe());
submitButton.addEventListener('click', selectBasicFoodType());
clearButton.addEventListener('click', clearResults());


// function selectBasicFoodType() {
//   var usersChoice = '';
//   if (firstSelection.checked) {
//     usersChoice = 'first-selection';
//   } else if (secondSelection.checked) {
//     usersChoice = 'second-selection';
//   }
// }
