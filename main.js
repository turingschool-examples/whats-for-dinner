//  // query selector vairables: 
var sideRadio = document.querySelector('#Side');
var mainRadio = document.querySelector('#Main Dish');
var dessertRadio = document.querySelector('#Dessert');
var foodName = document.querySelector('#food-name');
var cookpotImage = document.querySelector('.cookpot-image');

 // data/arrays:
var sideDishes = ["Garlic Bread", "Fries", "Rice & beans", "Nachos"];
var mainDishes = ["Spaghetti Bolognese", "Cheeseburger", "Fried Chicken", "Burrito Bowl"];
var dessertDishes = ["Chocolate Lava Cake", "Milkshake", "Ice Cream Sundae", "Cinnamon Rolls"];

 // event listeners:
var letsCookButton = document.querySelector('#lets-cook-button');
letsCookButton.addEventListener('click', displayRandomDish);

 // functions:
function selectRandomDish(dishes) {
    return dishes[Math.floor(Math.random() * dishes.length)];
  }
  
  // Define function to display a random dish for the currently selected category
  function displayRandomDish() {
    // Determine the currently selected category
    var selectedCategory = '';
    if (sideRadio.checked) {
      selectedCategory = 'Side';
    } else if (mainRadio.checked) {
      selectedCategory = 'Main Dish';
    } else if (dessertRadio.checked) {
      selectedCategory = 'Dessert';
    }
    
    // Select a random dish from the corresponding list
    var randomDish = '';
    if (selectedCategory === 'Side') {
      randomDish = selectRandomDish(sideDishes);
    } else if (selectedCategory === 'Main Dish') {
      randomDish = selectRandomDish(mainDishes);
    } else if (selectedCategory === 'Dessert') {
      randomDish = selectRandomDish(dessertDishes);
    }
    
    // Display the random dish and hide the cookpot image
    foodName.textContent = randomDish;
    cookpotImage.style.display = 'none';
  }
  
  // Attach event listener to "LET'S COOK!" button
  var letsCookButton = document.querySelector('#lets-cook-button');
  letsCookButton.addEventListener('click', displayRandomDish);
// var selectedArray;

//  function getRandomIndex(selectedArray) {
//     return Math.floor(Math.random() * selectedArray.length);
//   }

// function showRandomIndex() {
//     alert(`hi`);
//     if(document.getElementById('Side').checked) {
//         selectedArray = side;
//     } else if (document.getElementById('Main Dish').checked) {
//         selectedArray = mainDish;
//     } else if (document.getElementById('Dessert').checked) {
//         selectedArray = dessert;
//     }
//     var randomIndex = getRandomIndex();
//     var randomElement = selectedArray[randomIndex];
//     return foodResult.innerHTML += `You should make: ${randomElement}`;
// }
  


