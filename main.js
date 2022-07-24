//query selectors below
let chooseNewDishButton = document.querySelector('.selection--submit-button');
let makeDish = document.querySelector('.make-dish');
let dishName = document.querySelector('.dish-name');
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
function getRandomArray(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomDish(courseArray) {
  let dish = new Dish(course[getRandomArray(array)], courseArray);

  console.log(dish)
  return dish;
}

function displayDishResult(dish) {
  cookpotImg.classList.add('hidden');

  makeDish.classList.remove('hidden');

  dishName.classList.remove('hidden');

  return dishName.innerText = dish.name;
}

function requireSelection() {
  dishName.innerText = "Choose one!";

  return selectMessage;
}


function showACourseDish() {
  dishName.classList.remove('hidden');

  let chooseDishType = document.querySelector('input[name="meal-types"]:checked');

  if (chooseDishType === null) {
    requireSelection();
  }
  else if (chooseDishType.value === "Side") {
    currentDish = getRandomDish(sides);
    displayDishResult(currentDish);
    removeDishButton.classList.remove('hidden');
  } 
  else if (chooseDishType.value === "Main-Dish") {
    currentDish = getRandomDish(mains);
    displayDishResult(currentDish);
    removeDishButton.classList.remove('hidden');
  } 
  else if (chooseDishType.value === "Dessert") {
    currentDish = getRandomDish(desserts);
    displayDishResult(currentDish);
    removeDishButton.classList.remove('hidden');
  }

  clearButton.classList.remove('hidden');
}

function clearResultBox() {
  cookpotImg.classList.remove('hidden');

  makeDish.classList.add('hidden');

  dishName.classList.add('hidden');

  clearButton.classList.add('hidden');

  removeDishButton.classList.add('hidden');
}

// removeFromSides, removeFromMains, removeFromDesserts are too repetitive and not ideal to call in the removeThisDish function so I need to Refactor this to be more DRY and still have single responsibility

function removeFromArray(array) {
  let removedDish = '';
  for (let i = 0; i < array.length; i++) {
    if (currentDish.name === array[i]) {
      removedDish = array.splice(i, 1);
    }
  }
  return removedDish;
}

function confirmDishRemoved(dish) {
  cookpotImg.classList.add('hidden');

  
  dishName.innerText = `<p><em>This dish has been removed:</em></p>
  <h1 class="dish-name">${dish.name}</h1>`;

  return dishName;
}

function removeThisDish() {
  removeFromArray(currentDish.course);
  confir
}


