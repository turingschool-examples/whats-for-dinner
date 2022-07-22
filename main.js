var side = ["Esquites", "Elote", "Nopales", "Arroz Mexicano", "Frijoles fritos", "Calabaza rostizada", "Chiles en vinagre", "Guacamole", "Papas fritas","Consome"]
var mainDish = ["Chiles en Nogada", "Tamales", "Chilaquiles", "Mole negro", "Tlayudas", "Tlacoyos", "Pozole", "Menudo", "Mollejas", "Enchiladas", "Torta ahogado", "Toastadas", "Sopes", "Barbacoa", "Tacos al Pastor"]
var dessert = ["Gelatina", "Arroz con leche", "Paleta", "Dulce de lecha", "Flan", "Churros", "Concha", "Meringue", "Horchata", "Galletas"]

var letsCook = document.querySelector('.lets-cook') //lets cook button
var cookPotImg = document.querySelector('.cook-pot') //cook pot image
var clearButton = document.querySelector('.clear') //clear button
var hiddenH3 = document.querySelector('.you-should') //you should make h3 header

letsCook.addEventListener('click', showRandomFood)

function showRandomFood() {
    cookPotImg.classList.toggle('clear')
    clearButton.classList.toggle('clear')
    hiddenH3.classList.toggle('you-should')
}

// function togglePage(pageToHide, pageToShow) {
//     pageToHide.classList.add('hidden')
//     pageToShow.classList.remove('hidden')
//   }