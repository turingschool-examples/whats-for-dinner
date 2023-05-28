// Query Selectors:

var sideRadio = document.querySelector('#side');
var mainDishRadio = document.querySelector('#main-dish');
var dessertRadio = document.querySelector('#dessert');
var wholeMealRadio = document.querySelector('#whole-meal');
var letsCookButton = document.querySelector('#lets-cook-button');
var dishName = document.querySelector('.dish-name');
var potImage = document.querySelector('.pot-image');
var youShouldMake = document.querySelector('.you-should-make')
var selectedRadioButton = null;

// Dishes:
var sideDishes = ['Sweet Potatoes', 'Caesar salad', 'Garlic Bread', 'Baked potato'];
var mainDishes = ['Spaghetti', 'Chicken Alfredo', 'Chicken Parmesan'];
var dessertDishes = [
'Tiramisu',
 'Gelato',
 'Shortbread'
];

function getRandomDish(dishArray) {
    var randomIndex = Math.floor(Math.random() * dishArray.length);
    return dishArray[randomIndex];
  }
  
  // Event listeners:
  letsCookButton.addEventListener('click', function() {
    var dish = null;
      if (sideRadio.checked) {
      dish = getRandomDish(sideDishes);
    } else if (mainDishRadio.checked) {
      dish = getRandomDish(mainDishes);
    } else if (dessertRadio.checked) {
      dish = getRandomDish(dessertDishes);
    }
    dishName.textContent = dish;
    dishName.classList.remove('hidden');
    potImage.classList.add('hidden');
    youShouldMake.classList.remove('hidden');
  });

  sideRadio.addEventListener('click', function() {
    mainDishRadio.checked = false;
    dessertRadio.checked = false;
  });
  
  mainDishRadio.addEventListener('click', function() {
    sideRadio.checked = false;
    dessertRadio.checked = false;
  });
  
  dessertRadio.addEventListener('click', function() {
    sideRadio.checked = false;
    mainDishRadio.checked = false;
  });
  

  
  
  
  
  