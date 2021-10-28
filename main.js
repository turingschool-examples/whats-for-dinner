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
  "Margarita Pizza"
];

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
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];

var addRecipeButt = document.querySelector(".recipe-button");
var sideButt = document.querySelector("#side");
var mainButt = document.querySelector("#main");
var dessertButt = document.querySelector("#dessert");
var allButt = document.querySelector("#entire");
var letsCookButt = document.querySelector(".lets-cook");

letsCookButt.addEventListener("click", pullDish);

function pullDish() {
  if (sideButt.checked) {
    console.log("Peas");
  } else if (mainButt.checked) {
    console.log("Chicken");
  } else if (dessertButt.checked) {
    console.log("Cheesecake");
  } else {
    console.log("ignore me");
  }
}
