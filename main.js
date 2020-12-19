var sideRadio = document.querySelector('#side');
var mainDishRadio = document.querySelector('#mainDish');
var dessertRadio = document.querySelector('#dessert');
var letsCookButton = document.querySelector('.lets-cook');
var mealToMake = document.querySelector('#suggested-dish');
var cookingPotImg= document.querySelector('.cooking-pot');
// var radioButtons = document.getElementsByName("dish");
var youShouldCook= document.querySelector('.what-to-cook');
var suggestedDish= document.querySelector('#suggested-dish');
var errorMessage = document.querySelector('.error-message');
var clearButton = document.querySelector('#clear-section');
var submitButton = document.querySelector('#submit');
var hiddenHomeView = document.querySelectorAll('.is-not-visible');
var homeView = document.querySelector('.home-view');
var loginPage = document.querySelector(".login-page");
var visible = document.querySelector('.is-not-visible')
var tryAgainButton = document.querySelector('#try-again')


letsCookButton.addEventListener('click', suggestRecipe);
clearButton.addEventListener('click', clearResults);
submitButton.addEventListener('click', login);
tryAgainButton.addEventListener('click', showErrorMessage);


function login() {
  event.preventDefault();
  for (var i = 0; i < hiddenHomeView.length; i++) {
    if (!hiddenHomeView[i].className.includes("error-message")) {
      hiddenHomeView[i].classList.toggle("is-not-visible");
    };
  };
  loginPage.classList.add('is-not-visible');
};

function suggestRecipe() {
  event.preventDefault();
  if (sideRadio.checked) {
    changeView();
    mealToMake.innerText =  pickRandomRecipe(sides) + "!";
  } else if (mainDishRadio.checked) {
    changeView();
    mealToMake.innerText = pickRandomRecipe(mains) + "!";
  } else if(dessertRadio.checked){
    changeView();
    mealToMake.innerText = pickRandomRecipe(desserts) + "!";
  } else {
    showErrorMessage()
  }
};
function clearResults() {
}
function showErrorMessage() {
  event.preventDefault();
  errorMessage.classList.toggle("is-not-visible")
 // errorMessage.style.display = 'flex'
}

function changeView() {
  youShouldCook.style.display = 'flex';
  cookingPotImg.style.display = 'none';
}

function pickRandomRecipe(type) {
  var randomArrayIndex = Math.floor(Math.random()*type.length);
  return type[randomArrayIndex];
};
