// --------------------DishVarieties-------------------
var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies']

var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs']

var mainDishes =['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap','Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza']

//---------------------QuerySelectors-----------------
var allRadioButtons = document.querySelectorAll('input[name=radio-button]')
var sideButton = document.querySelector("#button-one");
var mainDishButton = document.querySelector("#button-two");
var dessertButton = document.querySelector("#button-three");
var entireMealButton = document.querySelector("#button-four");

var letsCookButton = document.querySelector(".lets-cook-button");
var addRecipeButton = document.querySelector(".add-recipe-button");

var potImage = document.querySelector("#pot-image");
var responseBox = document.querySelector(".box-three");

// other global variables-----


// ----------------------Event Listeners------------

letsCookButton.addEventListener('click', showDish);

// ---------------------Functions----------------------

function showDish(event){
    event.preventDefault()
    if(sideButton.checked === true){
        responseBox.innerHTML= `
        <section class="response-location">
         <p class="response-title together">You should make: </p>
         <p class="dish-response together">${sides[getRandomIndex(sides)]}</p>
         <button class="clear-button">Clear</button>`
     } else if (mainDishButton.checked === true){
        responseBox.innerHTML= `
        <section class="response-location">
          <p class="response-title together">You should make: </p>
          <p class="dish-response together">${mainDishes[getRandomIndex(mainDishes)]}</p>
          <button class="clear-button">Clear</button>`
        console.log(mainDishes[getRandomIndex(mainDishes)])
     } else if (dessertButton.checked === true){
        responseBox.innerHTML= `
        <section class="response-location">
            <p class="response-title together">You should make: </p>
            <p class="dish-response together">${desserts[getRandomIndex(desserts)]}</p>
            <button class="clear-button">Clear</button>`
        // console.log(desserts[getRandomIndex(desserts)])
     } else if (entireMealButton.checked === true){
        responseBox.innerHTML= `
         <section class="response-location">
            <p class="response-title together">You should make: </p>
             <p class="dish-response">${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</p>
                <button class="clear-button together">Clear</button>`
    }  
}
        // I can hide the pot and show within this function

        // These maybe useful for our needed functions.
        // sideButton.checked, dessertButton.checked, mainDishesButton.checked, allRadioButtons.checked 
        // sideButton.value, dessertButton.value, mainDishesButton.value,allRadioButtons.value
        // 
// function displayDish(){
//  if()
// }

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };