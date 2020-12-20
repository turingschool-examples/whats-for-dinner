var letsCookButton = document.querySelector('.lets-cook');
var mealToMake = document.querySelector('#suggested-dish');
var cookingPotImg= document.querySelector('.cooking-pot');
var radioButtons = document.getElementsByName("dish");
var youShouldCook= document.querySelector('.what-to-cook');
var suggestedDish= document.querySelector('#suggested-dish');
var errorMessage = document.querySelector('.error-message');
var clearButton = document.querySelector('#clear-section');
var submitButton = document.querySelector('#submit');
var hiddenHomeView = document.querySelectorAll('.is-not-visible');
var homeView = document.querySelector('.home-view');
var loginPage = document.querySelector(".login-page");
var visible = document.querySelector('.is-not-visible');
var tryAgainButton = document.querySelector('#try-again');
var loginName = document.querySelector('.input-name');
var header = document.querySelector('.whats-for-dinner')


letsCookButton.addEventListener('click', suggestRecipe);
clearButton.addEventListener('click', clearResults);
submitButton.addEventListener('click', delayLogin);
tryAgainButton.addEventListener('click', showErrorMessage);


function delayLogin() {
  event.preventDefault();
  if (loginName.value.length === 0) {
    return;
  } else {
      setTimeout(login, 3000);
      document.querySelector('.input-box').style.display = "none";
      document.querySelector('.login-message').innerText = `Hello ${loginName.value}!`;
    };
}

function login() {
  for (var i = 0; i < hiddenHomeView.length; i++) {
    if (!hiddenHomeView[i].className.includes("error-message")) {
      hiddenHomeView[i].classList.toggle("is-not-visible");
    };
  };
  loginPage.classList.add('is-not-visible');
  header.innerText = `Whats for Dinner ${loginName.value}?`;
};

function suggestRecipe() {
  event.preventDefault();
  var buttonValue = [sides, mains, desserts]
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[3].checked) {
      changeView();
      return mealToMake.innerText = `${pickRandomRecipe(mains)} with a side of ${pickRandomRecipe(sides)} and ${pickRandomRecipe(desserts)} for dessert!`;
    } else if (radioButtons[i].checked) {
        changeView();
       return mealToMake.innerText = pickRandomRecipe(buttonValue[i]) + "!";
    };
  };
  showErrorMessage();
};

function clearResults() {
  youShouldCook.style.display = 'none';
  cookingPotImg.style.display = 'block';
  for (var i =0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  };
};

function showErrorMessage() {
  event.preventDefault();
  errorMessage.classList.toggle("is-not-visible");
};

function changeView() {
  youShouldCook.style.display = 'flex';
  cookingPotImg.style.display = 'none';
};

function pickRandomRecipe(type) {
  var randomArrayIndex = Math.floor(Math.random()*type.length);
  return type[randomArrayIndex];
};
