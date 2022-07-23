var side = [
    "asaparugus",
    "baked beans",
    "french fries",
    "broccoli",
    "bread roll",
    "green beans",
    "mac and cheese",
    "mashed potatoes",
    "salad",
];

var mainDish = [
    "chicken",
    "meatloaf",
    "burger",
    "chicken parmesan",
    "lasagna",
    "spaghetti",
    "fajita",
    "pizza",
    "bbq ribs"
];

var dessert = [
    "cheesecake",
    "ice-cream",
    "apple pie",
    "chocolate cake",
    "brownie",
    "key-lime pie",
    "cookie",
    "banana pudding",
    "boston creme pie",
];

var cookedDinner = [];
var currentDinner = new Dinner(side[getRandomIndex(side)], mainDish[getRandomIndex(mainDish)], dessert[getRandomIndex(dessert)]);

/*do i need to make a variable for each array since user will 
only select one at a time and will only spit out one random 
variable at a time?*/

//------------------------query selectors
var side = document.querySelector('#side');
var mainDish = document.querySelector('#main-dish');
var dessert = document.querySelector('#dessert');
var entireMeal = document.querySelector('#entire-meal');
var letsCook = document.querySelector('.lets-cook');
var cookpot = document.querySelector('.cookpot');
var food = document.querySelector('.food');
//------------------------event listeners

letsCook.addEventListener('click', cookDinner);



//------------------------functions and event handlers 👇🏿
function cookDinner(); {
    var selectedDinnerItem = document.querySelector('input[name="dinner"]: checked').value;
    if (selectedDinnerItem === "side") {
        dinner.side = currentDinner;
        displayDinner();
    } else if (selectedDinnerItem === "main-dish") {
        dinner.main-dish = currentDinner;
        displayDinner();
    } else if (selectedDinnerItem === "dessert") {
        dinner.dessert = currentDinner;
        displayDinner();
    } else {
        dinner.side = currentDinner;
        displayDinner();
    }
}

function displayDinner() {
    h2.innerText = "have this for dinner";
  }
  
  displayDinnerg();





/* do these need to be random or do i need one per array*/





/* do i need to pull from the array with pop and then push into a new array?*/




  /*When a user selects a dish option and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

  When the dish name appears, the cookpot icon disappears*/









  