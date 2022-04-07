//querySelectors
var recipePickForm = document.querySelector('.recipe-item-form');
var letsCookButton = document.querySelector('.lets-cook-button');
var addARecipeButton = document.querySelector('.add-a-recipe');
var menuItemChoice = document.getElementsByName('options');
var displayRecipeItem = document.querySelector('.random-recipe');
var presentRecipeText = document.querySelector('.recipe-intro');
var cookPot = document.querySelector('.cookpot');
//event listeners
letsCookButton.addEventListener('click', letsCookInput);
addARecipeButton.addEventListener('click', addARecipe);


//global variables
var desserts = [
  "Banana Bread",
  "Ciambella",
  "French Silk Pie",
  "Cream Horns",
  "Rice Pudding",
  "Strawberry Champagne Cake"
];
var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
];
var mainDish = [
  "Ramen",
  "Nachos",
  "Burritos",
  "Tofu Potato Curry",
  "Lemon Seared Salmon",
];
var menuOptions = {
  desserts: desserts,
  sides: sides,
  mainDish: mainDish};

//functions
// Build out own random function
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function letsCookInput(){
  event.preventDefault();

  for (var i = 0; i < menuItemChoice.length; i++){

    if (menuItemChoice[i].checked){
    var choice = menuItemChoice[i].value;
      }
      if(choice === "Entire Meal") {
        displayFullMeal();
      }
    }
    var result = menuOptions[choice][getRandomIndex(menuOptions[choice])];
    displayRecipe(result);
  }

function displayRecipe(recipe) {
  displayRecipeItem.classList.remove('hidden');
  presentRecipeText.classList.remove('hidden');
  cookPot.classList.add('hidden');

  displayRecipeItem.innerText = recipe + '!';
}

function displayFullMeal() {
  var result = '';
  result += `${mainDish[getRandomIndex(mainDish)]} with a side of `;
  result += `${sides[getRandomIndex(sides)]} and `;
  result += `${desserts[getRandomIndex(desserts)]} for dessert`;

  displayRecipe(result);
}

function addARecipe(){

}
