//***Query Selectors***//

const pageDisplay = document.querySelector('.page-display');
const signInForm = document.querySelector('.sign-in-form');
const signInButton = document.querySelector('.entry-button');
const welcomeText = document.querySelector('.welcome-user');
const errorMessage = document.querySelector('h5');
const signInContainer = document.querySelector('.sign-in-container');
const getMealButton = document.querySelector('.submit');

//***Data Model***//

const sides = ["Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"];

const mains = ["Spaghetti and Meatballs",
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

const desserts = ["Apple Pie",
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


//***Event Handlers***//

const displayDish = () => {
  const foodDisplay = document.querySelector('#display-meal');
  const radioElements = document.getElementsByName("choose-dish");
  radioElements.forEach(element => {
    if (element.checked) {
      const checkedValue = Function("return " + element.value)();
      foodDisplay.innerHTML = `
      <h2 class="food-prompt">You should make:</h2>
      <h1 class="random-dish">${checkedValue[getRandom(checkedValue)]}!</h1>
      `;
    }
  });
}

const showMainPage = () => {
  var user = "";
  user = document.getElementById('name').value;
  if (user) {
    pageDisplay.classList.remove('hide');
    signInForm.classList.add('hide');
    signInForm.classList.remove('sign-in-form');
    welcomeText.innerText = `Welcome ${user}!`;
  } else {
    errorMessage.innerText = `Please provide valid name`;
  }
}

const supplyInput = () => {
  pageDisplay.classList.add('hide');
  signInForm.classList.remove('hide');
}

//***Functions***//

const getRandom = dishList => Math.floor(Math.random() * dishList.length)

//***Event Listeners***//

window.addEventListener('load', supplyInput);
signInButton.addEventListener('click', showMainPage);
getMealButton.addEventListener('click', displayDish);