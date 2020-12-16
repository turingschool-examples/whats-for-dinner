
var choiceSelector = document.querySelector('input.cook-button');
var resultSelector = document.querySelector('.result');
var imgSelector = document.querySelector('img#cookpot');
var addNewSelector = document.querySelector('input.add-new-recipe');
var addRecipeButton = document.querySelector('button.add-recipe');
var loginButton = document.querySelector('input.user-login-button');
var recipeContainer = document.getElementById('recipesContainer');
var favoriteRecipes = [];

loginButton.addEventListener("click", function(e) {
  e.preventDefault();

  var userName = document.getElementById('user-name').value

  if (userName) {
    recipeContainer.classList.toggle('hidden');
    addRecipeButton.classList.toggle('hidden');
    document.getElementById('authContainer').classList.add('hidden');
    document.querySelector('.welcome').innerHTML = `Welcome, ${userName}!`
  } else {
    alert("You must enter a name to enter the site.");
  }

})

choiceSelector.addEventListener("click", function(e) {
  e.preventDefault();
  var currentChoice = document.querySelector('input[name="choice"]:checked').value;

  getMeal(currentChoice);
});

window.addEventListener("load", function() {
  document.querySelector('footer').classList.add('hidden');
  recipeContainer.classList.add('hidden');
  addRecipeButton.classList.add('hidden');
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
      <span class="heart">
        <i class="fas fa-heart"></i>
      </span>
      <article id="suggestion">
        <p class="suggestion-text">You should totally make: </p>
        <h3>${randomMeal}</h3>
      </article>
    `
  addFavorites(randomMeal); // pass this meal to favorites if heart is clicked
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

function addFavorites(favoritedMeal) {
  console.log("THIS IS IN ADD FAVRT: ", favoritedMeal)
  document.querySelector('i.fa-heart').addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector('i.fa-heart').classList.toggle('red');
    favoriteRecipes.push(favoritedMeal);
    console.log("favorite recipies should be array: ", favoriteRecipes)
  });

  // if (document.querySelector('i.fa-heart').classList.contains('red')) {
  //   favoriteRecipes.push(favoritedMeal);
  // } else if (!document.querySelector('i.fa-heart').classList.contains('red') && favoriteRecipes.includes(favoritedMeal)) {
  //   var indexOfMeal = favoriteRecipes.indexOf(favoritedMeal)
  //   favoriteRecipes.splice(indexOfMeal, 1);
  // }

}

// function updateFavorites(favoritedMeal) {
//   console.log("favorited meal: ", favoritedMeal);
//   console.log("favorite recipes: ", favoriteRecipes)
//
// }

