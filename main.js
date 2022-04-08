//Query Selector radio buttons

var sideButton = document.querySelector("#side");
var mainButton = document.querySelector("#mainDish");
var dessertButton = document.querySelector("#dessert");
var entireMealButton = document.querySelector("#entireMeal");

//Query selector other buttons

var cookButton = document.querySelector("#letsCook");


//Dish arrays

var sidesArray = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'
]

var mainsArray = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'
]

var dessertArray = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'
]

var radioArray = [
  sideButton,
  mainButton,
  dessertButton,
]

//Event listeners and handlers


cookButton.addEventListener('click', checkRadioStatus);

function checkRadioStatus() {
  var sideDishStatus = document.getElementById('side');
  var mainDishStatus = document.getElementById('mainDish');
  var dessertStatus = document.getElementById('dessert');

  if (sideDishStatus.checked) {
    displaySide()
  } else if (mainDishStatus.checked) {
    displayMain()
  } else if (dessertStatus.checked) {
    displayDessert()
  }
}
//
// displaySide() {
//   //first select random side dish from the array (will need random function)
//   //next, will need to take random selection and replace the inner html
//   //of the selected dish section to display this
//   //finally will need to toggle the cookpot to be not displayed, and the
//   //selected dish to display instead
// }
//
// displayMain() {
//
// }
//
// displayDessert() {

// }

//Access random Element

var randomSide = sidesArray[Math.floor(Math.random() * sidesArray.length)];
var randomMain = mainsArray[Math.floor(Math.random() * mainsArray.length)];
var randomDessert = dessertArray[Math.floor(Math.random() * dessertArray.length)];


//First, function needs to see which radio button IS selected
//Once the function has the value of the selected button,
//it needs to go through the array that corresponds to the button
//and select one random element from that array
//then it needs to display that element on the page and
//hide the cookpot icon
