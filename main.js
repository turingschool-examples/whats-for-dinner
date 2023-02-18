var side = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", 
    "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", 
    "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", 
    "Hush Puppies"];

var mainDish = ["Spaghetti and Meatballs", "Pineapple Chicken",
    "Shakshuka", "Thai Yellow Curry", "Bibimbap",
    "Chicken Parmesean", "Butternut Squash Soup",
    "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice",
    "Sheet Pan Fajitas", "Margarita Pizza"];

var dessert = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake",
    "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake",
    "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes",
    "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin",
    "Croissants", "Eclairs"]



var cookPotImage = document.querySelector(".image");
var foodSuggestion = document.querySelector(".food-suggestion");
var randomResults = document.querySelector(".random-results");
var randomFood = document.querySelector(".random-food");
var currentFood;

// function cookPot() {
//     document.querySelector(".box2").classList.add("hidden");
//     document.querySelector(".food-suggestion").classList.remove("hidden");

// }

function letsCook() {
    var randomSide = getRandomIndex(side);
    var randomMainDish = getRandomIndex(mainDish);
    var randomDessert = getRandomIndex(dessert);
    cookPotImage.classList.add('hidden')
    foodSuggestion.classList.remove('hidden')

     if (document.getElementById("Side").checked) {
        currentFood = side[randomSide]
     } else if (document.getElementById("Main Dish").checked) {
        currentFood = mainDish[randomMainDish]
     } else if (document.getElementById("Dessert").checked) {
        currentFood = dessert[randomDessert]
     } else if (document.getElementById("Entire Meal").checked) {
        currentFood = `${mainDish[randomMainDish]} with a side of ${side[randomSide]} and ${dessert[randomDessert]} for dessert`
     }
        randomFood.innerText = `${currentFood}!`
        // randomFood.innerText += currentFood + '!'
    

}
        



function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
 };
