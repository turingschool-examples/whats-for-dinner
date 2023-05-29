// Query Selectors:

var sideRadio = document.querySelector('#side');
var mainDishRadio = document.querySelector('#main-dish');
var dessertRadio = document.querySelector('#dessert');
var wholeMealRadio = document.querySelector('#whole-meal');
var letsCookButton = document.querySelector('#lets-cook-button');
var potImage = document.querySelector('.pot-image');
var youShouldMake = document.querySelector('.you-should-make');
var selectedRadioButton = null;
var sideDishWhole = document.querySelector("#side-dish-whole");
var mainDishWhole = document.querySelector("#main-dish-whole");
var dessertDishWhole = document.querySelector("#dessert-dish-whole")
var singleDish = document.querySelector('#single-dish')

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
      if (sideRadio.checked) {
      singleDish.innerText = getRandomDish(sideDishes);
    } else if (mainDishRadio.checked) {
      singleDish.innerText = getRandomDish(mainDishes);
    } else if (dessertRadio.checked) {
      singleDish.innerText = getRandomDish(dessertDishes);
    } else if (wholeMealRadio.checked) {
        var sideDish = getRandomDish(sideDishes);
        var mainDish = getRandomDish(mainDishes);
        var dessertDish = getRandomDish(dessertDishes);
        
       // dish =  `${sideDish} \n${mainDish} \n${dessertDish}`
       sideDishWhole.innerText = " " + sideDish + " " + "and" + " ";
       mainDishWhole.innerText = mainDish +" " + 'with a side of';
       dessertDishWhole.innerText = dessertDish + " " + "for dessert";
       singleDish.classList.add('hidden');
      }
    // dishName.textContent = dish;
    potImage.classList.add('hidden');
    youShouldMake.classList.remove('hidden');
  });

  sideRadio.addEventListener('click', function() {
    mainDishRadio.checked = false;
    dessertRadio.checked = false;
    wholeMealRadio.checked = false;
  });
  
  mainDishRadio.addEventListener('click', function() {
    sideRadio.checked = false;
    dessertRadio.checked = false;
    wholeMealRadio.checked = false;

  });
  
  dessertRadio.addEventListener('click', function() {
    sideRadio.checked = false;
    mainDishRadio.checked = false;
    wholeMealRadio.checked = false;
  });
  
  wholeMealRadio.addEventListener('click', function() {
    sideRadio.checked = false;
    mainDishRadio.checked = false;
    dessertRadio.checked = false;
  });


  
  
  
  
  