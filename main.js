var sides = [
  "Seaweed Salad",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Tater Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Spring Rolls",
  "Charred Brussles",
  "Hush Puppies"
];

var mains = [
  "Spaghetti",
  "Orange Chicken",
  "Shakshuka",
  "Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Beef Stew",
  "BBQ Sandwich",
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
  "Eclairs",
]

var currentMeal = [];
var newSide;
var newMain;
var newDessert;
var formValue;

var submitButton = document.querySelector(".cook-button");
var form = document.querySelector("#foodForm").value;
var shouldMake = document.querySelector(".should-make");
var cookpot = document.querySelector(".cookpot");
var foodDisplay = document.querySelector(".value-display");
var clearButton = document.querySelector(".clear-button");
var formView = document.querySelector(".form-view");
var loginView = document.querySelector(".login-view");
var loginName = document.querySelector("input#name");
var loginEmail = document.getElementById("email")
var loginSubmit = document.getElementById("login-button")
var loginMsg = document.querySelector(".login")

submitButton.addEventListener("click", changeDisplay);
clearButton.addEventListener("click", clearDisplay)
window.addEventListener("load", clearDisplay);
window.addEventListener("load", openLogin);

function getRandomSide(array) {
  return array[Math.floor((Math.random() * array.length))];
};

function getRandomMain(array) {
  return array[Math.floor((Math.random() * array.length))];
};

function getRandomDessert(array) {
  return array[Math.floor((Math.random() * array.length))];
};

function getRandomMeal() {
  currentMeal = [getRandomSide(sides), getRandomMain(mains), getRandomDessert(desserts)];
  newSide = currentMeal[0];
  newMain = currentMeal[1];
  newDessert = currentMeal[2];
};

function changeDisplay() {
  getRandomMeal()
  var results = document.getElementsByName("food")
  for(i = 0; i < results.length; i++) {
    if(results[i].checked) {
      var check = results[i].value;
        if (check === "side") {
          foodDisplay.innerText = newSide;
        } else if (check === "main") {
          foodDisplay.innerText = newMain;
        } else if (check === "dessert") {
          foodDisplay.innerText = newDessert;
        } else {
          foodDisplay.innerText = currentMeal.join(", ");
        };
    };
    shouldMake.innerHTML = `<span class="should-make">You should make:</span>`
    foodDisplay.classList.remove("hidden")
    clearButton.classList.remove("hidden");
  };
  event.preventDefault();
};

function clearDisplay() {
  shouldMake.innerHTML = `<img class="cookpot" src="assets/cookpot.svg"/>`
  foodDisplay.classList.add("hidden");
  clearButton.classList.add("hidden");
};

function openLogin() {
  formView.classList.add("hidden");
  loginView.classList.remove("hidden");
};

function submitLoginInfo() {
  formView.classList.remove("hidden");
  loginView.style.display = "none";
  return loginMsg.innerText = `Hi, ${loginName.value}!`;
}
