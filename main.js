// User selects a dish option, clicks button and random dish pulls up
      //from the elected category
// Dish appears on right side and cooking pot gets hidden

// research radio input and how to make them work.
// create and event listener for the button
// when button is clicked...
  // random number generator
  // grab an index at random
  // insert that index value into an html element
  // hide the cooking pot emblem
// WILL NEED //
// function for hiding cooking pot
// function for random number
// research hidden function for event listener

var sides = ["Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"];

var mains = ["Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"];

var desserts = ["Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"];

// var submitButton = document.querySelector('.submit');

// submitButton.addEventListener('click', listFoodDish);

function displayDish() {
  var foodDisplay = document.querySelector('#display-meal');
  var radioElements = document.getElementsByName("choose-dish");
  for (var i = 0; i < radioElements.length; i++) {
    if (radioElements[i].checked) {
      if (radioElements[i].value === "side") {
        foodDisplay.innerHTML = `<h2>${sides[getRandom(sides)]}</h2>`;
      } else if (radioElements[i].value === "main") {
        foodDisplay.innerHTML = `<h2>${mains[getRandom(mains)]}</h2>`;
      } else {
        foodDisplay.innerHTML = `<h2>${desserts[getRandom(desserts)]}</h2>`;
      }

    }
  }
}

function getRandom(dishList) {
  return Math.floor(Math.random() * dishList.length);
}

// make a login page that takes a name input to proceed to app
// require a name to be submitted to show the main body
// use get element by id .value to obtain the input value
// 

window.addEventListener('load', supplyInput);
var pageDisplay = document.querySelector('.page-display');
var signInForm = document.querySelector('.sign-in-form');
var signInButton = document.querySelector('.entry-button');
var welcomeText = document.querySelector('.welcome-user');
var errorMessage = document.querySelector('h5');
var user = "";

signInButton.addEventListener('click', showMainPage);

function showMainPage() {
  user = document.getElementById('name').value;
  if (user) {
    pageDisplay.classList.remove('hide');
    signInForm.classList.add('hide');
    welcomeText.innerText = `Welcome ${user}!`
  } else {
    errorMessage.innerText = `Please provide valid name`
  }
}

function supplyInput() {
  pageDisplay.classList.add('hide');
  signInForm.classList.remove('hide');
}