// When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category
// When the dish name appears, the cookpot icon disappears


//Materials
var sideRadioInput = document.querySelector('#side');
var mainRadioInput = document.querySelector('#main');
var dessertRadioInput = document.querySelector('#dessert');
var letsCookButton = document.querySelector('button');
var emptyBoxSpace = document.querySelector('#empty-box');





//EventListeners

sideRadioInput.addEventListener();
mainRadioInput.addEventListener();
dessertRadioInput.addEventListener();





//Functions

// Step 1
// - Add event listeners to all dish options.
//Maybe all the function that the event listener button does is return the input?
// Every button clicked, inputs a random dish on the
// empty box (section of HTML)

//You can also do .value on the query Selector


//Arrays of:
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


var desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava"
"Flan",
"Macarons",
"Macaroons"
];
