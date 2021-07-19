/* ------------- Generate Random Dish ------------- */
function genRandomDish(dishType) {
    var randomDish = dishType[Math.floor(Math.random() * dishType.length)];
    return randomDish;
}

function newGenRandomDish(dishType, allDishes) {
    var randomDish 
}

/* ------------- Generate Random Meal ------------- */
function genRandomMeal(){
    var randomMeal = genRandomDish(mains) + " with a side of " + 
    genRandomDish(sides) + " and " + genRandomDish(desserts) + " for dessert!";
    return randomMeal;
}

/* ------------- Appearing Add Recipe Footer ------------- */
function toggleFooter() {
    var recipeFooter = document.getElementsByClassName('add-recipe-footer')[0];

    if (recipeFooter.style.display === 'block') {
        recipeFooter.style.display = 'none';
    } else {
        recipeFooter.style.display = 'block';
    }
    return console.log(recipeFooter.style.display);
}

/* ------------- Hide Pot at Let's Cook Action ------------- */
function togglePot() {
    var pot = document.getElementById('pot-img');
    var makeText = document.getElementsByClassName('make-statement')[0];
    var clearButton = document.getElementsByClassName('clear-button')[0];
    var typeSelection = document.getElementsByClassName('dishType');
    var isChecked = false;

    for (var i = 0; i < typeSelection.length; i++) {
      if (typeSelection[i].isChecked){
        isChecked = true;
        console.log('Is Checked is true')
        break;
      }
    }

    if (!isChecked) {
      console.log('Please select a dish option.')
    }

    if (pot.style.display === 'block') {
      pot.style.display = 'none';
      makeText.style.display = 'block';
      clearButton.style.display = 'block';
    } else {
      pot.style.display = 'block';
      makeText.style.display = 'none';
      clearButton.style.display = 'none';
    }
    return console.log(isChecked);
  }

  var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];
var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
];
var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
];
var allDishes = [
    {name: 'Miso Glazed Carrots', type: 'Side'},
    {name: 'Coleslaw', type: 'Side'},
    {name: 'Garden Salad', type: 'Side'},
    {name: 'Crispy Potatoes', type: 'Side'},
    {name: 'Sweet Potato Tots', type: 'Side'},
    {name: 'Coconut Rice', type: 'Side'},
    {name: 'Caeser Salad', type: 'Side'},
    {name: 'Shrimp Summer Rolls', type: 'Side'},
    {name: 'Garlic Butter Mushrooms', type: 'Side'},
    {name: 'Hush Puppies', type: 'Side'},
    {name: 'Spaghetti and Meatballs', type: 'Main'},
    {name: 'Pineapple Chicken', type: 'Main'},
    {name: 'Shakshuka', type: 'Main'},
    {name: 'Thai Yellow Curry', type: 'Main'},
    {name: 'Bibimbap', type: 'Main'},
    {name: 'Chicken Parmesean', type: 'Main'},
    {name: 'Butternut Squash Soup', type: 'Main'},
    {name: 'BBQ Chicken Burgers', type: 'Main'},
    {name: 'Ramen', type: 'Main'},
    {name: 'Empanadas', type: 'Main'},
    {name: 'Chicken Fried Rice', type: 'Main'},
    {name: 'Sheet Pan Fajitas', type: 'Main'},
    {name: 'Margarita Pizza', type: 'Main'},
    {name: 'Apple Pie', type: 'Dessert'},
    {name: 'Lemon Meringue Pie', type: 'Dessert'},
    {name: 'Black Forest Cake', type: 'Dessert'},
    {name: 'Banana Bread', type: 'Dessert'},
    {name: 'Peach Cobbler', type: 'Dessert'},
    {name: 'Cheesecake', type: 'Dessert'},
    {name: 'Funfetti Cake', type: 'Dessert'},
    {name: 'Baklava', type: 'Dessert'},
    {name: 'Flan', type: 'Dessert'},
    {name: 'Macarons', type: 'Dessert'},
    {name: 'Macaroons', type: 'Dessert'},
    {name: 'Chocolate Cupcakes', type: 'Dessert'},
    {name: 'Pavlova', type: 'Dessert'},
    {name: 'Pumpkin Pie', type: 'Dessert'},
    {name: 'Key Lime Pie', type: 'Dessert'},
    {name: 'Tart Tatin', type: 'Dessert'},
    {name: 'Croissants', type: 'Dessert'},
    {name: 'Eclairs', type: 'Dessert'}
];

/*
var recipeTypeInput = document.getElementById('recipe-type');
var recipeNameInput = document.getElementById('recipe-name');

export function addDish() {
    var name = recipeNameInput.value;
    var type = recipeTypeInput.value;
}
*/