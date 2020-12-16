
var choiceSelector = document.querySelector('input.cook-button');
var resultSelector = document.querySelector('.result');
var imgSelector = document.querySelector('img#cookpot');
var addNewSelector = document.querySelector('input.add-new-recipe');
var addRecipeButton = document.querySelector('button.add-recipe');

choiceSelector.addEventListener("click", function(e) {
  e.preventDefault();
  var currentChoice = document.querySelector('input[name="choice"]:checked').value;

  getMeal(currentChoice);
});

window.addEventListener("load", function() {
  document.querySelector('footer').classList.add('hidden');
})

addRecipeButton.addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector('footer').classList.toggle('hidden');
})

function getMeal(currentChoice, inputMeal = null) {
  var mealList = currentChoice + "s";
  var randomMeal;

  if (inputMeal !== null) {
    randomMeal = `
      ${inputMeal}
    `
  } else {
    if (mealList === "sides") {
      randomMeal = randomGenerator(sides);
    } else if (mealList === "mains") {
      randomMeal = randomGenerator(mains);
    } else if (mealList === "desserts") {
      randomMeal = randomGenerator(desserts);
    } else if (mealList === "meals") {
      var randomSide = randomGenerator(sides);
      var randomMain = randomGenerator(mains);
      var randomDessert = randomGenerator(desserts);

      randomMeal = `
      ${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!
    `
    }
  }


  imgSelector.classList.add('hidden');

  resultSelector.innerHTML = `
      <article id="suggestion">
        <p class="suggestion-text">You should totally make: </p>
        <h3>${randomMeal}</h3>
      </article>
    `
}

function randomGenerator(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

addNewSelector.addEventListener("click", function(e) {
  e.preventDefault();

  var userInputType = document.querySelector('#user-recipe-type');
  var userInputName = document.querySelector('#user-recipe-name');

  if (userInputType.value === 'side') {
    sides.push(userInputName.value);
  } else if (userInputType.value === 'main') {
    mains.push(userInputName.value);
  } else if (userInputType.value === 'dessert') {
    desserts.push(userInputName.value);
  } else {
    return alert("Please pick a valid category. Thx.");
  }

  getMeal(userInputType.value, userInputName.value)
  document.getElementById('add-new').reset();
  alert("Success! Your new recipe has been added to the database!");

})

