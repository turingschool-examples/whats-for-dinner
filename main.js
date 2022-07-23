//query selectors below
let chooseNewDishButton = document.querySelector('.selection--submit-button');
let displayBox = document.querySelector('.result--content');
let cookpotImg = document.querySelector('.cookpot-image');
let selectMessage = document.querySelector('.select');
let clearButton = document.querySelector('.result--clear-button');
let removeDishButton = document.querySelector('.result--dont-like-button');
//arrays for each course
let sides = [
  "Steamed Edamame",
  "Garden Salad",
  "Seaweed Salad",
  "Ginger Salad",
  "Coconut Shrimp",
  "Hush Puppies",
  "Crispy Potatoes",
  "Garlic Butter Mushrooms",
  "Sweet Potato Fries",
  "Steamed Green Beans",
  "Fruit Salad",
  "Mexican Corn on the Cob",
  "Roasted Veggies",
  "Sauteed Zucchini and Squash",
  "Quinoa and Broccoli Slaw",
  "Ceviche and Taro Chips",
  "Takoyaki",
  "Roasted Brussel Sprouts"
];

let mains = [
  "Pineapple Chicken",
  "Hawaiian Pizza",
  "Thai Yellow Curry",
  "Bibimbap",
  "BBQ Wings",
  "Yakitori",
  "Creamy Tomato Pasta",
  "Beef Bulgogi",
  "Adobo",
  "Sinigang",
  "Sweet Crispy Korean Fried Chicken",
  "Korean BBQ Pork Ribs",
  "Jajangmyeon",
  "Dragon Roll Sushi",
  "Tonkotsu Ramen",
  "Chicken Fried Rice",
  "Pad Thai",
  "Lamb Korma",
  "Chicken Tikka Masala",
  "General Tso Chicken",
  "Sesame Chicken"
];

let desserts = [
  "Apple Pie",
  "Vanila Ice Cream",
  "Mango Ice Cream",
  "Ube Ice Cream",
  "Macaroons",
  "Peach Cobbler",
  "Lemon Meringue Pie",
  "Banana Cream Pie",
  "Black Forest Cake",
  "Pavlova",
  "Pumpkin Pie",
  "Chocolate-Filled Croissants",
  "Halo-Halo",
  "Candied Sweet Potato",
  "Macha Cake",
  "Strawberry Mochi",
  "Chai Seed Rainbox Pudding"
];
let currentDish = '';

//event listeners below
chooseNewDishButton.addEventListener('click', showACourseDish);
clearButton.addEventListener('click', clearResultBox);
removeDishButton.addEventListener('click', removeThisDish);

// functions below
function getRandomArray(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getRandomDish(arr) {
  let dish = new Dish(arr[getRandomArray(arr)]);

  currentDish = dish;
}

function displayDishResult(dish) {
  cookpotImg.classList.add('hidden');

  displayBox.innerHTML = `<p><em>You should make:</em></p>
  <h1 class="dish-name">${dish.name}</h1>`;

  return displayBox;
}

function requireSelection() {
  displayBox.innerHTML = `<p><em>Please select one</em></p>`;

  return selectMessage;
}

function showACourseDish() {
  displayBox.classList.remove('hidden');

  let chooseDishType = document.querySelector('input[name="meal-types"]:checked');

  if (chooseDishType === null) {
    requireSelection();
  }
  else if (chooseDishType.value === "Side") {
    displayDishResult(currentDish);
    removeDishButton.classList.remove('hidden');
  } 
  else if (chooseDishType.value === "Main-Dish") {
    displayDishResult(currentDish);
    removeDishButton.classList.remove('hidden');
  } 
  else if (chooseDishType.value === "Dessert") {
    displayDishResult(currentDish);
    removeDishButton.classList.remove('hidden');
  }

  clearButton.classList.remove('hidden');
}

function clearResultBox() {
  displayBox.classList.add('hidden');

  clearButton.classList.add('hidden');

  removeDishButton.classList.add('hidden');
}

// removeFromSides, removeFromMains, removeFromDesserts are too repetitive and not ideal to call in the removeThisDish function so I need to Refactor this to be more DRY and still have single responsibility
 
function removeFromSides() {
  let removedDish = '';
  for (let i = 0; i < sides.length; i++) {
    if (currentDish.name === sides[i]) {
      removedDish = sides.splice(i, 1);
    }
  }
  return removedDish;
}

function removeFromMains() {
  let removedDish = '';
  for (let i = 0; i < mains.length; i++) {
    if (currentDish.name === mains[i]) {
      removedDish = mains.splice(i, 1);
    }
  }
  return removedDish;
}

function removeFromDesserts() {
  let removedDish = '';
  for (let i = 0; i < desserts.length; i++) {
    if (currentDish.name === desserts[i]) {
      removedDish = desserts.splice(i, 1);
    }
  }
  return removedDish;
}

function removeThisDish() {
  removeFromSides();
  
  removeFromMains();
  
  removeFromDesserts();

  return removedDish;
}

function confirmDishRemoved(dish) {
  cookpotImg.classList.add('hidden');

  displayBox.innerHTML = `<p><em>This dish has been removed:</em></p>
  <h1 class="dish-name">${dish.name}</h1>`;

  return displayBox;
}

