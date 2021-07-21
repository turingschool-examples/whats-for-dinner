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


letsCookButton.addEventListener('click', letsCook);


function letsCook(event) {
    event.preventDefault();
    var randomSide = sides[getRandomNumber(sides)];
    var randomDish = mainDishes[getRandomNumber(mainDishes)];
    var randomDessert = desserts[getRandomNumber(desserts)];
    var userInput;
    for (var i = 0; i < selectedMeals.length; i++) {
        if (selectedMeals[i].checked) {
            userInput = selectedMeals[i].id;
            if (userInput === 'side') {
                potSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${randomSide}!</p>`;
            } else if (userInput === 'main-dish') {
                potSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${randomDish}!</p>`;
            } else if (userInput === 'dessert') {
                potSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${randomDessert}!</p>`;
            } else if (userInput === 'entire-meal') {
                potSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${randomDish} with a side of ${randomSide} and ${randomDessert} for dessert!</p>`;
            };       
        };
    };
};
function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
};