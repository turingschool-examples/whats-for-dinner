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


// *** Event listeners *** //

loginButton.addEventListener('click', function(e) {
  e.preventDefault();

  var userName = document.getElementById('user-name').value;
  var randomWelcome = randomGenerator(welcomes);

  if (userName) {
    recipeContainer.classList.toggle('hidden');
    addRecipeButton.classList.toggle('hidden');
    document.getElementById('auth-container').classList.add('hidden');
    document.querySelector('.welcome').innerHTML = `${randomWelcome} ${userName}!`;
  } else {
    alert('You must enter a name to enter the site.');
  }
})

choiceSelector.addEventListener('click', function(e) {
  e.preventDefault();

  var currentChoice = document.querySelector("input[name='choice']:checked");

  if (currentChoice === null) {
    return alert('Please pick a valid category. Thx.');
  } else {
    getMeal(currentChoice.value);
  }

});

window.addEventListener('load', function() {
  document.querySelector('footer').classList.add('hidden');
  recipeContainer.classList.add('hidden');
  addRecipeButton.classList.add('hidden');
})

addRecipeButton.addEventListener('click', function(e) {
  e.preventDefault();

  document.querySelector('footer').classList.toggle('hidden');
})

favoritesContainer.addEventListener('dblclick', function(e) {
  e.preventDefault();

  var deleteSlug = e.target.getAttribute('data-slug');
  var result = makeTitle(deleteSlug)

  for (let i = 0; i < favoriteRecipes.length; i++) {
    if (favoriteRecipes[i] === result) {
      favoriteRecipes.splice(i, 1);
    }
  }
  displayFavorites();
});

addNewSelector.addEventListener('click', function(e) {
  e.preventDefault();

  var userInputType = document.querySelector('#user-recipe-type');
  var userInputName = document.querySelector('#user-recipe-name');

  if (document.forms['add-new-form']['new-name'].value === '') {
    return alert('Please pick a valid category and/or provide a name for your delicious recipe. Thx.');
  } else if (userInputType.value === 'side') {
    sides.push(userInputName.value);
  } else if (userInputType.value === 'main') {
    mains.push(userInputName.value);
  } else if (userInputType.value === 'dessert') {
    desserts.push(userInputName.value);
  } else {
    return alert('Please pick a valid category and/or provide a name for your delicious recipe. Thx.');
  }

  getMeal(userInputType.value, userInputName.value);
  document.getElementById('add-new').reset();
  alert('Success! Your new recipe has been added to the database!');
});

// *** Helper functions *** //
function getMeal(currentChoice, inputMeal = null) {
  var mealList = currentChoice + 's';
  var randomMeal;

  if (inputMeal !== null) {
    randomMeal = `
      ${inputMeal}
    `
  } else {
    if (mealList === 'sides') {
      randomMeal = randomGenerator(sides);
    } else if (mealList === 'mains') {
      randomMeal = randomGenerator(mains);
    } else if (mealList === 'desserts') {
      randomMeal = randomGenerator(desserts);
    } else if (mealList === 'meals') {
      var randomSide = randomGenerator(sides);
      var randomMain = randomGenerator(mains);
      var randomDessert = randomGenerator(desserts);

      randomMeal = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert`
    }
  }

  imgSelector.classList.add('hidden');

  resultSelector.innerHTML = `
      <span class='heart'>
        <i class='fas fa-heart'></i>
      </span>
      <article id='suggestion'>
        <p class='suggestion-text'>You should totally make: </p>
        <h3>${randomMeal}</h3>
        <button id ='favorites' class='btn' disabled>Show my favorites</button>
      </article>
    `
  addFavorites(randomMeal);
}

function randomGenerator(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// TODO use MutationObserver() to detect favorites; might be able to connect this with a heart in the navbar
function addFavorites(favoritedMeal) {
  checkFavorites();
  var btn = document.getElementById('favorites');

  document.querySelector('i.fa-heart').addEventListener('click', function(e) {
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

    if (btn.innerHTML === 'Show my favorites') {
      document.getElementById('favorites').innerHTML = 'Hide my favorites';
    } else if (btn.innerHTML === 'Hide my favorites') {
      document.getElementById('favorites').innerHTML = 'Show my favorites';
    }
  });
}

// TODO this could be added to the MutationObserver()
function checkFavorites() {
  var favoritesButtonSelector = document.getElementById('favorites');

  if (favoriteRecipes.length > 0) {
    favoritesButtonSelector.removeAttribute('disabled');
    displayFavorites();
  }
}

function displayFavorites() {
  var content = '';

  if (favoriteRecipes.length < 1) {
    document.getElementById('faves-container').classList.add('hidden');
    resetPot();
  }

  for (let i = 0; i < favoriteRecipes.length; i++) {
    var slug = favoriteRecipes[i].split(' ').join('-');
    content += `<li class='slugified' data-slug='${slug}'>${favoriteRecipes[i]}</li>`
  }
  return favoritesContainer.innerHTML = content;
}

function makeTitle(slug) {
  var words = slug.split('-');
  return words.join(' ');
};

function resetPot() {
  document.querySelector('.choice-list').reset();
  resultSelector.innerHTML = `<img id='cookpot' src='./assets/cookpot.svg'>`;
};

