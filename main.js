var letsCookButton = document.querySelector('.cook-button');
var cookpotImage = document.querySelector('.cookpot');
var dishPrinted = document.querySelector('.dish-output');
var dishHeading = document.querySelector('.dish-heading');
var clearButton = document.querySelector('.clear');
var radioInputs = document.getElementsByName('food');


letsCookButton.addEventListener('click', function() {
  showRandomDish();
  showDishPage();
});
  
clearButton.addEventListener('click', function() {
  showHomePage();
  clearRadioButtons();
});

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showDishPage() {
  event.preventDefault();
  cookpotImage.classList.add('hidden');
  dishPrinted.classList.remove('hidden');
  dishHeading.classList.remove('hidden');
  clearButton.classList.remove('hidden');
};

function showRandomDish() {
  dishPrinted.innerText = '';
  var selectedButton = document.querySelector('input[name="food"]:checked').value;
    if (selectedButton === 'side') {
    dishPrinted.innerText = sides[getRandomIndex(sides)] + "!";
  } else if (selectedButton === 'main') {
    dishPrinted.innerText = mains[getRandomIndex(mains)] + "!";
  } else if (selectedButton === 'dessert') {
    dishPrinted.innerText = desserts[getRandomIndex(desserts)] + "!";
  } else if (selectedButton === 'entire-meal') {
    dishPrinted.innerHTML = `<p>You should make ${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</p>`
  }
};

function showHomePage() {
    cookpotImage.classList.remove('hidden');
    dishPrinted.classList.add('hidden');
    dishHeading.classList.add('hidden');
    clearButton.classList.add('hidden');
  };

  function clearRadioButtons() {
    for (var i =0; i < radioInputs.length; i++) {
      radioInputs[i].checked = false;
    }
  };

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