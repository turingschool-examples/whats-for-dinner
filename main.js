 // query selector vairables: 
letsCookButton = document.querySelector('#lets-cook-button');
choice = document.querySelector('input[name="dish_type"]:checked');
foodResult = document.querySelector('#food-name');

// sideArray = document.querySelector('#Side')

 // data/arrays:
var side = ["Fries", "Rice & beans", "Nachos"];
var mainDish = ["Cheeseburger", "Fried Chicken", "Burrito Bowl"];
var dessert = ["Milkshake", "Chocolate Lava Cake", "Cinnamon Rolls"];

 // event listeners:
 letsCookButton.addEventListener(`click`, showRandomIndex);

 // functions:
var selectedArray;

//  function getRandomIndex(selectedArray) {
//     return Math.floor(Math.random() * selectedArray.length);
//   }
function showRandomIndex() {
    if(choice === "Side") {
        selectedArray = side;
    } else if (choice === "Main Dish") {
        selectedArray = mainDish;
    } else if (choice === "Dessert") {
        selectedArray = dessert;
    }
    var randomIndex = Math.floor(Math.random() * selectedArray.length);
    var randomElement = selectedArray[randomIndex];
    foodResult.innerHTML = randomElement;

    alert(`hello`)
}
  