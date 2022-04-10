// query selectors
var generatedMeals = document.querySelector('.generated-meals');
var potImage = document.querySelector('.pot-image');
var hiddenDishSuggestion = document.querySelector('.dish-suggestion-hidden');
var sideRadioButton = document.querySelector('.side-option');
var mainRadioButton = document.querySelector('.main-option');
var dessertRadioButton = document.querySelector('.dessert-option');
var entireMealRadioButton = document.querySelector('.entire-meal-option');

var letsCookButton = document.querySelector('.lets-cook-button');


// arrays
var sideDishes = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies']

var mainDishes = [
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
'Margarita Pizza']

var desserts = [
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
'Eclairs']


// event listeners
letsCookButton.addEventListener('click', displayMeal);
sideRadioButton.addEventListener('click', randomizeSideDishes);
mainRadioButton.addEventListener('click', randomizeMainDishes);
dessertRadioButton.addEventListener('click', randomizeDesserts);
entireMealRadioButton.addEventListener('click', randomizeEntireMeal);
// functions and event handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function makeContent(fromArray){
  var index = getRandomIndex(fromArray);
  return fromArray[index];
}

function hideCookPot() {
  event.preventDefault();
  potImage.classList.add("hidden");
  hiddenDishSuggestion.classList.remove("hidden");
  generatedMeals.classList.remove("hidden");

}

function randomizeSideDishes() {
  return makeContent(sideDishes)
};

function randomizeMainDishes() {
  return makeContent(mainDishes)
};

function randomizeDesserts() {
  return makeContent(desserts)
};

function randomizeEntireMeal() {
  randomizeSideDishes();
  randomizeMainDishes();
  randomizeDesserts();
};

function displayMeal() {
  var dishTypeSelection = document.querySelector('input[name="options"]:checked');

  var randomSideReturn = randomizeSideDishes();
  var randomMainReturn = randomizeMainDishes();
  var randomDessertReturn = randomizeDesserts();

  if (dishTypeSelection.value === "side") {
    generatedMeals.innerText = randomSideReturn + '!';
  } else if (dishTypeSelection.value === "main-dish") {
    generatedMeals.innerText = randomMainReturn + '!';
  } else if (dishTypeSelection.value === "dessert") {
    generatedMeals.innerText = randomDessertReturn + '!';
  } else if (dishTypeSelection.value === "entire-meal") {
    generatedMeals.innerText = `${randomMainReturn} with a side of ${randomSideReturn} and ${randomDessertReturn} for dessert!`;
  }
  hideCookPot();

}
