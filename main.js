var buttonLetsCook = document.querySelector(".lets-cook-button");
var recipeBox = document.querySelector(".selected-dish");
var cookpot = document.querySelector(".cookpot");
var buttonClear = document.querySelector("#clear");

buttonLetsCook.addEventListener('click', function(){
  if (document.querySelector('input[name="dish"]:checked')){
    buttonLetsCook.innerText = "LET'S COOK!";
    generateRandomDish()
  } else {
    errorAlert();
  }
});

buttonClear.addEventListener('click', clearInputs);

function randomDish(array){
  return Math.floor(Math.random() * array.length);
}

function generateRandomDish(){
  recipeBox.innerHTML = "";
  var selectedDish = document.querySelector('input[name="dish"]:checked');
  var currentRandomDish = "";
  if (selectedDish.value === "side"){
    currentRandomDish = sides[randomDish(sides)];
    recipeBox.innerHTML += `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish}!</h2></section>`;
  } else if (selectedDish.value === "main dish"){
    currentRandomDish = mains[randomDish(mains)];
    recipeBox.innerHTML += `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish}!</h2></section>`;
  } else if (selectedDish.value === "dessert"){
    currentRandomDish = desserts[randomDish(desserts)];
    recipeBox.innerHTML += `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish}!</h2></section>`;
  } else if (selectedDish.value === "entire meal"){
    currentRandomDish1 = mains[randomDish(mains)];
    currentRandomDish2 = sides[randomDish(sides)];
    currentRandomDish3 = desserts[randomDish(desserts)];
    recipeBox.innerHTML += `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish1} with a side of ${currentRandomDish2} and ${currentRandomDish3} for dessert!</h2></section>`;
  }

  showClearButton();
  hideCookPot();
}

function hideClearButton(){
  var clearButton = document.querySelector("#clear");
  clearButton.className = "clear hidden";
}

function showClearButton(){
  var clearButton = document.querySelector("#clear");
  clearButton.className = "clear";
}

function hideCookPot(){
  var cookPotImage = document.querySelector("#cookpot");
  cookPotImage.className = "CookPot hidden";
}

function showCookPot(){
  var cookPotImage = document.querySelector("#cookpot");
  cookPotImage.className = "CookPot";
}

function clearInputs(){
  showCookPot();
  hideClearButton();
  recipeBox.innerHTML = "";
  var inputs = document.getElementsByName("dish");
   for(var i = 0; i < inputs.length; i++)
      inputs[i].checked = false;
}

function errorAlert(){
  var inputsCounter = 0;
  var inputs = document.getElementsByName("dish");
  for(var i = 0; i < inputs.length; i++){
   if (inputs[i].checked === false){
     inputsCounter ++;
   };
  }
  if(inputsCounter === 4){
    // .innerText = "PLEASE CHOOSE 1!";
    hideCookPot()
    recipeBox.innerHTML = "";
    recipeBox.innerHTML += `<section class="recipe-container"><h2 class="current-dish" id="error-message">*Please select a dish on left!</h2></section>`;
  }
}
