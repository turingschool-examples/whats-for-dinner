var letsCookButton = document.querySelector(".letsCookButton")
letsCookButton.addEventListener("click", returnResults);



function returnResults() {
  document.querySelector(".icon").style.display = 'none';
  var choice = document.querySelector('input[name="food"]:checked');
    if (choice === side) {
      choice = returnSide()
    } else if (choice === mainDish) {
      choice = returnMainDish()
    } else {
      choice = returnDessert()
    }
  document.querySelector(".icon").style.display = "none";
  document.querySelector(".tagline").style.display = "block";
  document.querySelector(".answer").innerHTML = `${choice}!`
}

//eventually put in form validation: if choice === null OR maybe just else {alert("Please select an option before clicking the button.")

// if/then for entire meal. works but conflicts with single code lines below
// if (choice === "entireMeal") {
//   document.querySelector(".results").innerHTML =
//     `<i>You should make:</i>
//     <strong><p style="font-size:30pt">${returnMainDish()}, ${returnSide()}, and ${returnDessert()}!</strong>`
//   } else if (choice === 'side') {

function returnSide(){
  return sides[Math.floor(Math.random() * sides.length)]
}

function returnMainDish(){
  return mains[Math.floor(Math.random() * sides.length)]
}

function returnDessert(){
  return desserts[Math.floor(Math.random() * sides.length)]
}

// var clearButton = document.querySelector(".      ")
// clearButton.addEventListener("click", returnIcon);
// function returnIcon() {
// tagline.classList.add("hidden")
// }


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
