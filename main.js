var side = ["Esquites", "Elote", "Nopales", "Arroz Mexicano", "Frijoles fritos", "Calabaza rostizada", "Chiles en vinagre", "Guacamole", "Papas fritas", "Consome"]
var mainDish = ["Chiles en Nogada", "Tamales", "Chilaquiles", "Mole negro", "Tlayudas", "Tlacoyos", "Pozole", "Menudo", "Mollejas", "Enchiladas", "Torta ahogado", "Toastadas", "Sopes", "Barbacoa", "Tacos al Pastor"]
var dessert = ["Gelatina", "Arroz con leche", "Paleta", "Dulce de leche", "Flan", "Churros", "Concha", "Meringue", "Horchata", "Galletas"]

var sides = side[Math.floor(Math.random() * side.length)]
var mainDishes = mainDish[Math.floor(Math.random() * mainDish.length)]
var desserts = dessert[Math.floor(Math.random() * dessert.length)]

var cookPotImg = document.querySelector('.cook-pot') //cook pot image
var clearButton = document.querySelector('.clear') //clear button
var hiddenH3 = document.querySelector('.you-should') //you should make h3 header


var randomFood = document.querySelector('.random-food')
var letsCook = document.querySelector('.lets-cook') //lets cook button
letsCook.addEventListener('click', showRandomFood)
function showRandomFood() {
    var radioButtons = document.getElementsByName('selection')
    var selected = Array.from(radioButtons).find(radio => radio.checked)
    if (selected.value === "side") {
        randomFood.innerHTML = sides
    } else if (selected.value === "mainDish") {
        randomFood.innerHTML = mainDishes
    } else {
        randomFood.innerHTML = desserts
    }
    cookPotImg.classList.toggle('toggle2')
    clearButton.classList.toggle('toggle')
    hiddenH3.classList.toggle('toggle')
    randomFood.classList.toggle('toggle')
}

var allRecipe = document.querySelector('.all-recipe-btn')
allRecipe.addEventListener('click', showAllRecipe)
function showAllRecipe() {
    
}

//need to have radio input value recongized
//need to return element from array based on radio input value
//possibly do it with innerHTML and render function