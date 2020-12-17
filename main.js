var sideRadioBtn = document.querySelector("#side-dish-select");
var mainRadioBtn = document.querySelector('#main-dish-select');
var dessertRadioBtn = document.querySelector('#dessert-dish-select');
var entireRadioBtn = document.querySelector('#entire-dish-select');
var letsCookBtn = document.querySelector('#lets-cook-button');
var resultsBox = document.querySelector('#results-box');
var potPicture = document.querySelector('.pot-picture');
var clearBtn = document.querySelector('.clear-button');
var generatedRecipe = document.querySelector('.generated-recipe');

letsCookBtn.addEventListener('click', getMyDish);
clearBtn.addEventListener('click', startOver)

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

function getMyDish(event) {
    event.preventDefault();
    potPicture.classList.add('hidden');
    clearBtn.classList.remove('hidden');
    var randomSide = sides[getRandomIndex(sides)];
    var randomMain = mains[getRandomIndex(mains)];
    var randomDessert = desserts[getRandomIndex(desserts)];
    
    if (sideRadioBtn.checked) {
        getSideItem(randomSide)
    } else if (mainRadioBtn.checked) {
        getMainItem(randomMain)
    } else if (dessertRadioBtn.checked) {
       getDessertItem(randomDessert)
    } else if (entireRadioBtn.checked) {
       getEntireItem(randomSide, randomMain, randomDessert)
    } else if (sideRadioBtn.checked === false && mainRadioBtn.checked === false && dessertRadioBtn.checked === false && entireRadioBtn.checked === false) {
        showErrorMessage()
    }
}

function getSideItem(randomSide) {
    generatedRecipe.innerHTML = `
        <p>Since you're snackin' light, a bit of </p> 
        <p>${randomSide}</p>
        <p> sounds good.</>
        `
}

function getMainItem(randomMain) {
    generatedRecipe.innerHTML = `Seems like you've got the munchies. You need <span>${randomMain}</span> for dinner.`
}

function getDessertItem(randomDessert) {
    generatedRecipe.innerHTML = `Time to satisfy your sweet tooth. How about <span>${randomDessert}</span> for dessert?`
}

function getEntireItem(randomSide, randomMain, randomDessert) {
    generatedRecipe.innerHTML = `
        ${randomSide}
        <br>
        ${randomMain}
        <br>
        ${randomDessert}
        `
}

function showErrorMessage() {
    clearBtn.classList.add('hidden');
    potPicture.classList.remove('hidden');
    return alert('Looks like you\'re missing a meal! What sounds good today?')
}


function startOver() {
    potPicture.classList.remove('hidden');
    clearBtn.classList.add('hidden');
    generatedRecipe.innerHTML = "";
    sideRadioBtn.checked = false;
    mainRadioBtn.checked = false;
    dessertRadioBtn.checked = false;
    entireRadioBtn.checked = false;
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

