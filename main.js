var sides = [
    'Fries',
    'Salad',
    'Brussels Sprout',
    'Guacamole',
    'Chips',
    'Fried Plantains',
    'Fried Yuca',
    'Blood Sausage',
    'Chorizo',
    'Cole Salad',
    'Tomato Soup'
];
var mainDishes = [
    'Lasagne', 
    'Cheese Arepa',
    'Pulled Pork',
    'Barbacoa Tacos',
    'Brisket',
    'Beef Ribs',
    'Mushrooms Risotto',
    'Milano Risoto',
    'Beef Ravioli',
    'Beef Shank',
    'Pork and Cheese Cachapa',
    'Sourdough Pizza'
];
var desserts = [
    'Sarrapia Pannacotta',
    'Basque Cheese Cake',
    'Bread Pudding',
    'Soft Chocolate Cake',
    'Sweet Papaya',
    'Guava Croissant',
    'Golfeados',
    'Strawberries and Cream'
];

var letsCookButton = document.querySelector('#lets-cook');
var potImg = document.querySelector('#pot-img');
var potSection = document.querySelector('#pot-section');
var selectedMeals = document.getElementsByName('answer');
var clearButton = document.querySelector('#clear');
// var resultSection = document.querySelector('.result-p');
// var resultMealSelection = document.querySelector('.meal-selection');
var resultSection = document.querySelector('#result-section');

letsCookButton.addEventListener('click', letsCook);
clearButton.addEventListener('click', clearResults);

function clearResults(event) {
    event.preventDefault();
    resultSection.classList.add('hidden');
    potImg.classList.remove('hidden');
};

function letsCook(event) {
    event.preventDefault();
    potImg.classList.add('hidden');
    var randomSide = sides[getRandomNumber(sides)];
    var randomDish = mainDishes[getRandomNumber(mainDishes)];
    var randomDessert = desserts[getRandomNumber(desserts)];
    var userInput;
    for (var i = 0; i < selectedMeals.length; i++) {
        if (selectedMeals[i].checked) {
            userInput = selectedMeals[i].id;
            if (userInput === 'side') {
                resultSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${randomSide}!</p>`;
                clearButton.classList.remove('hidden');
            } else if (userInput === 'main-dish') {
                resultSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${randomDish}!</p>`;
                clearButton.classList.remove('hidden');
            } else if (userInput === 'dessert') {
                resultSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${randomDessert}!</p>`;
                clearButton.classList.remove('hidden');
            } else if (userInput === 'entire-meal') {
                resultSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${randomDish} with a side of ${randomSide} and ${randomDessert} for dessert!</p>`;
                clearButton.classList.remove('hidden');
            };       
        };
    };
};
function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
};