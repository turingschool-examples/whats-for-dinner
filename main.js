// Global variables
var cookButton = document.querySelector(".lets-cook");
var form = document.querySelector("form");

// query html to grab elements and assign to variables
//  radio buttons
//  let's cook buttons

cookButton.addEventListener('click', function() {
  var potImage = document.querySelector(".menu-box-right");
  console.log(potImage);
  potImage.classList.toggle("hidden");

});

function buildFoodtext() {

};



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// build event listeners to let's cook buttons
//  this should read the radio buttons with .value
//  maybe store the value of the radio buttons to pass into the function
// then run a function

// function buildHtml
// use parameter from radio buttons to determine the array
// use random index to get food item
// built html to inject

// function injectHtml
// add hidden class to pot image
// injectHtml into index.html
