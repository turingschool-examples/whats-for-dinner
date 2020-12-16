var sideRadioBtn = document.querySelector("#side-dish-select");
var mainRadioBtn = document.querySelector('#main-dish-select');
var dessertRadioBtn = document.querySelector('#dessert-dish-select');
var entireRadioBtn = document.querySelector('#entire-dish-select');
var letsCookBtn = document.querySelector('#lets-cook-button');

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

function getMyDish() {

}


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function getRandomSide() {
    var randomSide = sides[getRandomIndex(sides)];
    return randomSide;
}

function getRandomMain() {
    var randomMain = mains[getRandomIndex(mains)];
    return randomMain;
}

function getRandomDessert() {
    var randomDessert = desserts[getRandomIndex(desserts)];
    return randomDessert;
}

