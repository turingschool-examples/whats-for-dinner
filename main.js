var sideRadioBtn = document.querySelector("#side-dish-select");
var mainRadioBtn = document.querySelector('#main-dish-select');
var dessertRadioBtn = document.querySelector('#dessert-dish-select');
var entireRadioBtn = document.querySelector('#entire-dish-select');
var letsCookBtn = document.querySelector('#lets-cook-button');
var resultsBox = document.querySelector('#results-box');
var potPicture = document.querySelector('.pot-picture');
var clearBtn = document.querySelector('.clear-button');
var generatedRecipe = document.querySelector('.generated-recipe');
var entryBtn = document.querySelector('.entry-button');
var userNameBox = document.querySelector('#user-name-box');
var recipePage = document.querySelector('.recipe-page');
var loginPage = document.querySelector('.login-page');
var pageTitle = document.querySelector('.title');
var nameError = document.querySelector('.name-error');
var backToLogin = document.querySelector('#back-to-login');
var mealError = document.querySelector('.meal-error');
var saveBtn = document.querySelector('.save');

letsCookBtn.addEventListener('click', getMyDish);
clearBtn.addEventListener('click', startOver)
entryBtn.addEventListener('click', enterSite)
backToLogin.addEventListener('click', loginPageAppears)
saveBtn.addEventListener('click', saveThatShit)

var sides = [
    'Pickled Herring',
    'Potato Au Gratin',
    'Lobster Risotto',
    'Paella',
    'Poutine'
];

var mains = [
    'Coq A Vin',
    'Chicken Chasseur',
    'Beef Wellington',
    'Chicken Biryani',
    'Prawn Fiedua',
    'Roasted Hake',
    'Lamb Ragu Over Pappardelle',
    'Cote de Boeuf with Bearnaise',
    'Romana Courgette Agrodolce'

];
var desserts = [
    'Baked Alaska',
    'Grand Marnier Souffle',
    'Flaming Bananas Foster',
    'Horchata Semifreddo',
    'Burbon Sea Salt Caramel',
    'Creme Brulee'
];

var savedSides = [];
var savedMains = [];
var savedDesserts = [];
var savedEntires = [];

function loginPageAppears() {
    loginPage.classList.toggle('hidden');
    recipePage.classList.toggle('hidden');
}

function showRecipe() {
    potPicture.classList.toggle('hidden');
    clearBtn.classList.toggle('hidden');
    saveBtn.classList.toggle('hidden');
}

function forgotName() { 
    nameError.classList.remove('hidden');
    setTimeout(() => nameError.classList.add('hidden'), 2500);
 }

 function forgotMeal() {
    mealError.classList.remove('hidden');
     setTimeout(() => mealError.classList.add('hidden'), 2500);
     showRecipe();
 }

//  function saveThatShit(){
//      if (sideRadioBtn.checked) {
//          savedSides.push(randomSide)
//      } else if (mainRadioBtn.checked) {
//          savedMains.push(randomMain)
//      } else if (dessertRadioBtn.checked) {
//          savedDesserts.push(randomDessert)
//     } 

function enterSite() {
    if (userNameBox.value === "") {
        forgotName()
        return;
    }
    loginPageAppears()
    pageTitle.innerHTML = `What's For Dinner, ${userNameBox.value}?`
}

function getMyDish(event) {
    event.preventDefault();    
    var randomSide = sides[getRandomIndex(sides)];
    var randomMain = mains[getRandomIndex(mains)];
    var randomDessert = desserts[getRandomIndex(desserts)];
    showRecipe();
    if (sideRadioBtn.checked) {
        getSideItem(randomSide)
    } else if (mainRadioBtn.checked) {
        getMainItem(randomMain)
    } else if (dessertRadioBtn.checked) {
       getDessertItem(randomDessert)
    } else if (entireRadioBtn.checked) {
       getEntireItem(randomSide, randomMain, randomDessert)
    } else if (sideRadioBtn.checked === false && mainRadioBtn.checked === false && dessertRadioBtn.checked === false && entireRadioBtn.checked === false) {
        forgotMeal();
    }
}

function getSideItem(randomSide) {
    generatedRecipe.innerHTML = `
        <p class="result-words">Since you're snackin' light, a bit of </p> 
        <p class="result-meal">${randomSide}</p>
        <p class="result-words"> sounds good.</>
        `
}

function getMainItem(randomMain) {
    generatedRecipe.innerHTML = `
        <p class="result-words"> Seems like you've got the munchies. You need</p>
        <p class="result-meal">${randomMain}</p> 
        <p class="result-words"> for dinner.</p>
        `
}

function getDessertItem(randomDessert) {
    generatedRecipe.innerHTML = `
        <p class="result-words"> Time to satisfy your sweet tooth. How about</p> 
        <p class="result-meal">${randomDessert}</p> 
        <p class="result-words"> for dessert? </p>
        `
}

function getEntireItem(randomSide, randomMain, randomDessert) {
    generatedRecipe.innerHTML = `
        <p class="result-words"> Three courses? Sounds like a special occasion.</p>
        <p class="result-meal">${randomSide}, ${randomMain}</p>
        <p class="result-words">&</p>
        <p class="result-meal">${randomDessert}</p>
        <p class="result-words">should really do the trick.</p>
        `
}

function startOver() {
    showRecipe()
    generatedRecipe.innerHTML = "";
    sideRadioBtn.checked = false;
    mainRadioBtn.checked = false;
    dessertRadioBtn.checked = false;
    entireRadioBtn.checked = false;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

