// User selects a dish option, clicks button and random dish pulls up
      //from the elected category
// Dish appears on right side and cooking pot gets hidden

// research radio input and how to make them work.
// create and event listener for the button
// when button is clicked...
  // random number generator
  // grab an index at random
  // insert that index value into an html element
  // hide the cooking pot emblem
// WILL NEED //
// function for hiding cooking pot
// function for random number
// research hidden function for event listener

var sides = ["Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"];

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
  "Margarita Pizza"];

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
  "Eclairs"];

var submitButton = document.querySelector('.submit');

// submitButton.addEventListener('click', listFoodDish);

function getRandom(dishList) {
  return Math.floor(Math.random() * dishList.length);
}