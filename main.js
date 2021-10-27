var letsCookButton = document.querySelector(".letsCookButton");
var clearButton = document.querySelector(".clearButton");
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

letsCookButton.addEventListener("click", returnResults);
clearButton.addEventListener("click", clearPage);

function returnResults() {
  document.querySelector(".icon").style.display = 'none';
  var choice = document.querySelector('input[name="food"]:checked');
    if (choice === null){
      alert("Please select an option before clicking the button.");
      document.querySelector(".icon").style.display = "block";
      return;
    } else if (choice === entireMeal) {
      document.querySelector(".answer").innerHTML = `${returnMainDish()}, ${returnSide()}, and ${returnDessert()}!`
    } else if (choice === side) {
      document.querySelector(".answer").innerHTML = `${returnSide()}!`
    } else if (choice === mainDish) {
      document.querySelector(".answer").innerHTML = `${returnMainDish()}!`
    } else {
      document.querySelector(".answer").innerHTML = `${returnDessert()}!`
    };
  document.querySelector(".icon").style.display = "none";
  document.querySelector(".tagline").style.display = "block";
  document.querySelector(".clearButton").style.display = "block";
};

function clearPage(){
  location.reload();
}

function returnSide(){
  return sides[Math.floor(Math.random() * sides.length)];
}

function returnMainDish(){
  return mains[Math.floor(Math.random() * sides.length)];
}

function returnDessert(){
  return desserts[Math.floor(Math.random() * sides.length)];
}
