var letsCookButton = document.querySelector('.cook-button');
var cookpotImage = document.querySelector('.cookpot');
var dishPrinted = document.querySelector('.dish-output');
var dishHeading = document.querySelector('.dish-heading');
var clearButton = document.querySelector('.clear');
// var currentSide = sides[getRandomIndex(sides)];
// var currentMain = mains[getRandomIndex(mains)];
// var currentDessert = desserts[getRandomIndex(desserts)];

letsCookButton.addEventListener('click', showRandomDish);
clearButton.addEventListener('click', showHomePage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showRandomDish() {
  var selectedButton = document.querySelector('input[name="food"]:checked').value;
    if (selectedButton === 'side') {
    dishPrinted.innerText = sides[getRandomIndex(sides)] + "!";
  } else if (selectedButton === 'main') {
    dishPrinted.innerText = mains[getRandomIndex(mains)] + "!";
  } else if (selectedButton === 'dessert') {
    dishPrinted.innerText = desserts[getRandomIndex(desserts)] + "!";
  }
  cookpotImage.classList.add('hidden');
  dishPrinted.classList.remove('hidden');
  dishHeading.classList.remove('hidden');
  clearButton.classList.remove('hidden');
  event.preventDefault();
};

function showHomePage() {
    cookpotImage.classList.remove('hidden');
    dishPrinted.classList.add('hidden');
    dishHeading.classList.add('hidden');
    clearButton.classList.add('hidden');
    event.preventDefault();
  }


// function showRandomDish() {
//   var dish = document.querySelector(".radio").value;
//   document.querySelector(".dish-output").innerText = dish;
// }


// function showRandomDish() {
//   event.preventDefault();
//   var food = document.form[0];
//   var txt = '';
//
//   for(let i = 0; i < food.length; i++) {
//     if (food[i].checked) {
//       txt = txt + food[i].value;
//     }
//   }
//   document.querySelctor('#output').innerText(`Show ${txt}`);
// }








var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes',
'Sweet Potato Tots', 'Coconut Rice', 'Caesar Salad', 'Shrimp Summer Rolls',
'Garlic Butter Mushrooms', 'Hush Puppies'];
var mains = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry',
'Bibimbap', 'Chicken Parmesan', 'Butternut Squash Soup', 'BBQ Chicken Burgers',
'Ramen', 'Empanadas', 'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza'];
var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread',
'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Macaroons',
'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin',
'Croissants', 'Eclair'];