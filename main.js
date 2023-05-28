

var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
];
var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza",
];
var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
];

var currentRecipe = '';
var entireMeal = '';

// query selectors

var potImage = document.querySelector('.image-in-block-2');

var recipeName = document.querySelector('.recipe');

var recipeSugText = document.querySelector('.should-make-text');
// buttons

var radioButtons = document.querySelectorAll('input');
var letsCookBtn = document.querySelector('.cook-button');
var clearBtn = document.querySelector('.clear-button');

// event listeners

letsCookBtn.addEventListener('click', showRecipe);

// functions and event handlers

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function createRecipe() {
    var rndSideRecIndex = getRandomIndex(sides);
    var rndMainRecIndex = getRandomIndex(mains);
    var rndDsrtRecIndex = getRandomIndex(desserts);

    // var rndSideRecipe = sides[rndSideRecIndex]
    

}



function showRecipe() {

  // var rndMainRecIndex = getRandomIndex(mains);
  // var rndDsrtRecIndex = getRandomIndex(desserts);
  var radioButtons = document.querySelectorAll('input');
  
    for (var i = 0; i <         radioButtons.length; i++) {
        if (radioButtons[i].checked && radioButtons[i].value === 'Side') {
            currentRecipe = sides[getRandomIndex(sides)];
            recipeName.innerText = currentRecipe;
            console.log('current sides recipe: ', currentRecipe);
        }else if (radioButtons[i].checked && radioButtons[i].value === 'Main') {
            currentRecipe = mains[getRandomIndex(mains)]
            recipeName.innerText = currentRecipe;
            console.log('current Mains recipe: ', currentRecipe)
        }else if (radioButtons[i].checked && radioButtons[i].value === 'Dessert') {
            currentRecipe = desserts[getRandomIndex(desserts)]
            recipeName.innerText = `${currentRecipe}!`;
            console.log('currentRecipe: ', currentRecipe)
        }else if (radioButtons[i].checked && radioButtons[i].value === 'Meal') {
            currentRecipe = makeMeal()
            recipeName.innerText = currentRecipe;
        }
  }toggleImageRecipe();
}


function toggleImageRecipe() {
    recipeName.classList.remove('hidden');
    potImage.classList.add('hidden');
    recipeSugText.classList.remove('hidden');
    clearBtn.classList.remove('hidden');
}
    
// clearBtn.addEventListener('click', clearPage)

// function clearPage() {
//     currentRecipe = currentRecipe.shift
//     clearBtn.innerT
// }