// --------------------DishVarieties/Arrays-------------------
var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies'];

var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs'];

var mainDishes =['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap','Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza'];

//---------------------QuerySelectors-----------------
var sideButton = document.querySelector("#button-one");
var mainDishButton = document.querySelector("#button-two");
var dessertButton = document.querySelector("#button-three");
var entireMealButton = document.querySelector("#button-four");

var letsCookButton = document.querySelector(".lets-cook-button");
var addRecipeButton = document.querySelector(".add-recipe-button");
var clearButton = document.querySelector(".clear-button")

var potImage = document.querySelector(".pot-image");
var responseBox = document.querySelector(".box-three");
var displayMeals = document.querySelector(".display-meals");
var responseTitle = document.querySelector(".response-title");

// ----------------------Event Listeners------------

letsCookButton.addEventListener('click', showDish);
clearButton.addEventListener('click', clearDisplay);

// ---------------------Functions----------------------

function showDish(event){
    event.preventDefault()
    show(responseTitle);
    if(sideButton.checked === true){
        displayMeals.innerText = `
        ${sides[getRandomIndex(sides)]}!`;
     } else if (mainDishButton.checked === true){
        displayMeals.innerText = `
        ${mainDishes[getRandomIndex(mainDishes)]}!`;

     } else if (dessertButton.checked === true){
        displayMeals.innerText = `
        ${desserts[getRandomIndex(desserts)]}!`;

     } else if (entireMealButton.checked === true){
        displayMeals.innerText = `
         ${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`  ;

    } else {
        responseTitle.classList.add("hidden")
        displayMeals.innerText = `ERROR: You must Choose a food!`;
      
       
    };

   
    show(clearButton);
    hide(potImage);
    show(displayMeals);
};

function clearDisplay(){
  show(responseBox);
  show(potImage);
  hide(displayMeals);
  hide(clearButton);
  hide(responseTitle);
}
// ------------------ helper functions---------------

function show(elements) {
    elements.classList.remove('hidden');
  };
  
  function hide(elements) {
    elements.classList.add('hidden');
  };

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };