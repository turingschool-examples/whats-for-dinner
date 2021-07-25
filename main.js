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
"Hush Puppies",
]

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
 "Margarita Pizza",
]

var desserts = [
 "Apple Pie",
 "Lemon Meringue Pie",
 "Black Forest Cake",
 "Banana Bread",
 "Peach Cobbler",
 "Cheesecake",
 "Funfetti Cake",
 "Flan",
 "Macarons",
 "Chocolate Cupcakes",
 "Pavlova",
 "Pumpkin Pie",
 "Key Lime Pie",
 "Tart Tatin",
 "Croissants",
 "Eclairs",
]

var result = document.querySelector('p');
var cookBtn = document.getElementById('cook-btn');
var sideRadio = document.getElementById("side-radio");
var mainRadio = document.getElementById("main-radio");
var dessertRadio = document.getElementById("dessert-radio");
var entireMealRadio = document.getElementById("full-meal-radio");
var h2Ele = document.querySelector('h2');
var box2Img = document.querySelector('.second-box');
var clearBtn = document.getElementById("clear-btn")

cookBtn.addEventListener('click', makeMeal);
clearBtn.addEventListener('click', remove);

function makeMeal() {
  if (sideRadio.checked || mainRadio.checked || dessertRadio.checked || entireMealRadio.checked) {
    event.preventDefault();
    box2Img.classList.add('second-box-hide-bg');
    h2Ele.classList.remove('hidden');
    clearBtn.style.visibility = "visible";
    result.classList.remove('hidden');
    if (sideRadio.checked) {
      result.innerText = sides[getRandomIndex(sides)];
    } else if (mainRadio.checked) {
      result.innerText = mains[getRandomIndex(mains)];
    } else if (dessertRadio.checked) {
      result.innerText = desserts[getRandomIndex(desserts)];
    } else if (entireMealRadio.checked) {
     result.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`;
    }
  } else {
    return;
  }
};

function clearAllRadios() {
  sideRadio.checked = false;
  mainRadio.checked = false;
  dessertRadio.checked = false;
  entireMealRadio.checked = false;
}

function remove() {
  event.preventDefault();
  h2Ele.classList.add('hidden');
  result.classList.add('hidden');
  clearBtn.style.visibility = "hidden";
  clearAllRadios();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


