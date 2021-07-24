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
var form = document.querySelector('#grab-form');
var resultSection = document.querySelector('#result-section');

letsCookButton.addEventListener('click', letsCook);
clearButton.addEventListener('click', clearResults);

function clearResults(event) {
    event.preventDefault();
    resultSection.classList.add('hidden');
    potImg.classList.remove('hidden');
    clearButton.classList.add('hidden');
    form.reset();
};

function letsCook(event) {
    event.preventDefault();
    var randomSide = sides[getRandomNumber(sides)];
    var randomDish = mainDishes[getRandomNumber(mainDishes)];
    var randomDessert = desserts[getRandomNumber(desserts)];
    var userInput;

    if(!selectedMeals[0].checked && !selectedMeals[1].checked && !selectedMeals[2].checked && !selectedMeals[3].checked) {
        return alert('Please select one meal.');
    };
    for (var i = 0; i < selectedMeals.length; i++) {  
         if (selectedMeals[i].checked) {
            userInput = selectedMeals[i].id;
             if (userInput === 'side') {
                renderMessage(randomSide);
            } else if (userInput === 'main-dish') {
                renderMessage(randomDish);
            } else if (userInput === 'dessert') {
                renderMessage(randomDessert);
            } else if (userInput === 'entire-meal') {
                resultSection.innerHTML = `<p class="result-p"> You should make:</p>
                <p class="meal-selection">${randomDish} with a side of ${randomSide} and ${randomDessert} for dessert!</p>`;
                clearButton.classList.remove('hidden');
                potImg.classList.add('hidden');
                resultSection.classList.remove('hidden');
            } 
        }   
    };

    
};
function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
};
function renderMessage(foodType) {
    resultSection.innerHTML = `<p class="result-p"> You should make:</p>
      <p class="meal-selection">${foodType}!</p>`;
      clearButton.classList.remove('hidden');
      potImg.classList.add('hidden');
      resultSection.classList.remove('hidden');
};