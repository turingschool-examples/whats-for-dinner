var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter, Mushrooms",
  "Hush Puppies"];

var mains = [
  "Spaghetti and Meatballs",
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

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macaroons",
  "Chocolate Cupcakes",
  "Baklava",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"];


//queryselectors
var sideDish = document.querySelector(".option1");
var mainDish = document.querySelector(".option2");
var dessertDish = document.querySelector(".option3");
var entire = document.querySelector(".option4");
var cook = document.querySelector('.lets-cook');
var rightBox = document.querySelector(".Container-b")
var clear = document.querySelector(".clear")

//randomDishes
var randomSide = sides[getRandomIndex(sides)];
var randomMains = mains[getRandomIndex(mains)];
var randomDessert = desserts[getRandomIndex(desserts)];

//eventlisteners
cook.addEventListener("click", letsCook);
clear.addEventListener("click", clearButton)
//funtions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function letsCook() {
  if (sideDish.checked) {
    rightBox.innerHTML = `
    <h3><i>You should make:</i></h3>
    <h2>${randomSide}!</h2>
    <button class='clear'>CLEAR</button>`
  } else if(mainDish.checked) {
    rightBox.innerHTML = `
    <h3><i>You should make:</i></h3>
    <h2>${randomMains}!</h2>
    <button class='clear'>CLEAR</button>`
  } else if (dessertDish.checked) {
    rightBox.innerHTML = `
    <h3><i>You should make:</i></h3>
    <h2>${randomDessert}!</h2>
    <button class='clear'>CLEAR</button>`
  } else {
    rightBox.innerHTML = `
    <h3><i>You should make:</i></h3>
    <h2>${randomSide}, ${randomMains}, and ${randomDessert}! </h2>
    <button class='clear' type='button'>CLEAR</button>`
  }
}
function clearButton() {
  reload()
}
