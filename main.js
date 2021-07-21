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
class EntireMeal {
    constructor(mainDish, side, dessert) {
        this.mainDish = mainDish;
        this.side = side;
        this.dessert = dessert;
    };
};

var letsCookButton = document.querySelector('#lets-cook');
var potImg = document.querySelector('#pot-img');
var potSection = document.querySelector('#pot-section');
var selectedMeals = document.getElementsByName('answer');


letsCookButton.addEventListener('click', letsCook);


function letsCook(event) {
    event.preventDefault();
    var getRandomSide = sides[getRandomNumber(sides)];
    var getRandomDish = mainDishes[getRandomNumber(mainDishes)];
    var getRandomDessert = desserts[getRandomNumber(desserts)];
    var userInput;
    for (var i = 0; i < selectedMeals.length; i++) {
        if (selectedMeals[i].checked) {
            userInput = selectedMeals[i].id;
            if (userInput === 'side') {
                potSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${getRandomSide}!</p>`;
            } else if (userInput === 'main-dish') {
                potSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${getRandomDish}!</p>`;
            } else if (userInput === 'dessert') {
                potSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${getRandomDessert}!</p>`;
            } else if ()        
        };
    };
};
function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
};