var sides = ["Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"]

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
"Margarita Pizza"]

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
"Eclairs"]



var submitButton = document.querySelector("#submit-button");
submitButton.addEventListener('click', letsCook)





function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function letsCook() {
event.preventDefault()
var dishText = document.querySelector(".dish-text")
var image = document.querySelector("img")
var side = document.querySelector("#Side");
var main = document.querySelector("#Main");
var dessert = document.querySelector("#Dessert");
var entireMeal = document.querySelector("#Entire");
side.value = sides[getRandomIndex(sides)];
main.value = mains[getRandomIndex(mains)];
dessert.value = desserts[getRandomIndex(desserts)];
image.classList.add('hidden');
dishText.classList.remove('hidden')
}
