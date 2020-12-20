// Global Variables
var choiceSelector = document.querySelector('input.cook-button');
var resultSelector = document.querySelector('.result');
var imgSelector = document.querySelector('img#cookpot');
var addNewSelector = document.querySelector('input.add-new-recipe');
var addRecipeButton = document.querySelector('button.add-recipe');
var loginButton = document.querySelector('input.user-login-button');
var recipeContainer = document.getElementById('recipes-container');
var favoritesContainer = document.getElementById('faves-list');
var favoriteRecipes = [];

// login button event listener -- hides login frame and shows left/right frames plus welcome and add recipe button in nav
loginButton.addEventListener("click", function(e) {
  e.preventDefault();

  var userName = document.getElementById('user-name').value;
  var randomWelcome = randomGenerator(welcomes);

  if (userName) {
    recipeContainer.classList.toggle('hidden');
    addRecipeButton.classList.toggle('hidden');
    document.getElementById('auth-container').classList.add('hidden');
    document.querySelector('.welcome').innerHTML = `${randomWelcome} ${userName}!`;
  } else {
    alert("You must enter a name to enter the site.");
  }
})

// left frame eventlistener -- detects selection from choices and then sends choice to getMeal()
choiceSelector.addEventListener("click", function(e) {
  e.preventDefault();

  var currentChoice = document.querySelector('input[name="choice"]:checked');

  if (currentChoice === null) {
    return alert("Please pick a valid category. Thx.");
  } else {
    getMeal(currentChoice.value);
  }

});

// window listener -- sets footer to hidden, as well as recipe container  and add recipe button so that when login is
//  completed, they can be toggled
window.addEventListener("load", function() {
  document.querySelector('footer').classList.add('hidden');
  recipeContainer.classList.add('hidden');
  addRecipeButton.classList.add('hidden');
})

// event listener for add recipe button in nav -- shows footer when clicked
addRecipeButton.addEventListener("click", function(e) {
  e.preventDefault();

  document.querySelector('footer').classList.toggle('hidden');
})

// function to get meal, whether a current choice is made or if this is a new custom meal created by user
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
        <button id ="favorites" class="btn" disabled>Show my favorites</button>
      </article>
    `
  addFavorites(randomMeal);
}

// random number generator for meal types as well as welcome
function randomGenerator(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// user input new recipe grabs value of fields and sends that to the right frame to show the new recipe
// alert prevents no category or empty fields
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
  } else if (document.forms["add-new-form"]['new-name'].value === "") {
    alert("Please pick a valid category and/or provide a name for your delicious recipe. Thx.");
  } else {
    alert("Please pick a valid category and/or provide a name for your delicious recipe. Thx.");
  }


  getMeal(userInputType.value, userInputName.value);
  document.getElementById('add-new').reset();
  alert("Success! Your new recipe has been added to the database!");
});

function addFavorites(favoritedMeal) {
  checkFavorites();
  var btn = document.getElementById('favorites');

  document.querySelector('i.fa-heart').addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector('i.fa-heart').classList.toggle('red');

    if (document.querySelector('i.fa-heart').classList.contains('red')) {
      favoriteRecipes.push(favoritedMeal);
    } else if (!document.querySelector('i.fa-heart').classList.contains('red') && favoriteRecipes.includes(favoritedMeal)) {
      var indexOfMeal = favoriteRecipes.indexOf(favoritedMeal);
      favoriteRecipes.splice(indexOfMeal, 1);
    }
    checkFavorites();
  });

  btn.addEventListener('click', function() {
    document.getElementById('faves-container').classList.toggle('hidden');

    if (btn.innerHTML === "Show my favorites") {
      document.getElementById('favorites').innerHTML = "Hide my favorites";
    } else if (btn.innerHTML === "Hide my favorites") {
      document.getElementById('favorites').innerHTML = "Show my favorites";
    }
  });
}

function checkFavorites() {
  var favoritesButtonSelector = document.getElementById('favorites');

  if (favoriteRecipes.length > 0) {
    favoritesButtonSelector.removeAttribute('disabled');
    displayFavorites();
  }

}

function displayFavorites() {
  var content = "";

  if (favoriteRecipes.length < 1) {
    document.getElementById('faves-container').classList.add('hidden');
    resetPot();
  }

  for (let i = 0; i < favoriteRecipes.length; i++) {
    var slug = favoriteRecipes[i].split(' ').join('-');
    content += `<li class="slugified" data-slug="${slug}">${favoriteRecipes[i]}</li>`
  }
  return favoritesContainer.innerHTML = content;
}

favoritesContainer.addEventListener('dblclick', function(e) {
  e.preventDefault();

  var deleteSlug = e.target.getAttribute('data-slug');
  var result = makeTitle(deleteSlug);

  for (let i = 0; i < favoriteRecipes.length; i++) {
    if (favoriteRecipes[i] === result) {
      favoriteRecipes.splice(i, 1);
    }
  }
  displayFavorites();
});

function makeTitle(slug) {
  var words = slug.split('-'); // split slug into array of words

  for (var i = 0; i < words.length; i++) {
    var word = words[i]; // each word in the array
    words[i] = word.charAt(0).toUpperCase() + word.slice(1); // uppercase 1st, attach the rest
  }
  return words.join(' ');
};

function resetPot() {
  document.querySelector('.choice-list').reset();
  resultSelector.innerHTML = `<img id="cookpot" src="./assets/cookpot.svg">`;
};

