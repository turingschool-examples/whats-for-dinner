var side = document.querySelector("#side");
var mainDish = document.querySelector("#main-dish");
var dessert = document.querySelector("#dessert");
var entireMeal = document.querySelector("#entire-meal");

var buttonLetsCook = document.querySelector("#lets-cook");

var showRecipeSection = document.querySelector(".show-recipe");

var cookPot = document.querySelector("img")

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
