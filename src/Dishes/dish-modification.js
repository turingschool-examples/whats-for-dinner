addRecipeButton = document.querySelector('add-recipe-button');
addNewButton = document.querySelector('add-new-button');
addNewButton = document.addEventListener("click", null);
letsCookButton = document.getElementById('lets-cook-button');
clearButton = document.querySelector('clear-button');
clearButton = document.addEventListener("click", null);

/* ------------- Appearing Add Recipe Footer ------------- */
function toggleFooter() {
    var recipeFooter = document.getElementsByClassName('add-recipe-footer')[0];

    if (recipeFooter.style.display === 'block') {
        recipeFooter.style.display = 'none';
        tempRecipeButton = document.getElementsByClassName('add-recipe-button')[0].innerHTML = "ADD A RECIPE";
    } else {
        recipeFooter.style.display = 'block';
        tempRecipeButton = document.getElementsByClassName('add-recipe-button')[0].innerHTML = "DONE ADDING RECIPES";
    }
}

/* ------------- Generate Random Dish ------------- */
function genDish() {
    var pot = document.getElementById('pot-img');
    var makeText = document.getElementById('make-statement');
    var makeRecipe = document.getElementById('result-statement');
    var clearButton = document.getElementById('clear-button');

    if (document.getElementById('side-option').checked) {
        makeRecipe.innerText = `${sides[genRandomDish(sides)]}`
        console.log(makeRecipe.innerText);
    } else if (document.getElementById('main-option').checked) {
        makeRecipe.innerText = `${mains[genRandomDish(mains)]}`
        console.log(makeRecipe.innerText);
    } else if (document.getElementById('dessert-option').checked) {
        makeRecipe.innerText = `${desserts[genRandomDish(desserts)]}`
        console.log(makeRecipe.innerText);
    } else if (document.getElementById('meal-option').checked) {
        makeRecipe.innerText = `${sides[genRandomDish(sides)]}` +" with a side of " + 
        `${mains[genRandomDish(mains)]}` + " and " + `${desserts[genRandomDish(desserts)]}` + " for dessert!";
        console.log(makeRecipe.innerText);
    }
    /* ------------- Hide Pot at Let's Cook Action ------------- */
    if (pot.style.display === 'block') {
        pot.style.display = 'none';
        makeText.style.display = 'block';
        makeRecipe.style.display = "block";
        clearButton.style.display = 'block';
        } else {
        pot.style.display = 'block';
        makeText.style.display = 'none';
        makeRecipe.style.display = "none";
        clearButton.style.display = 'none';
        }
}

function addDish() {
    var dishTypeInput = document.getElementById('recipe-type-input');
    var dishName = document.getElementById('recipe-name-input');
}

function genRandomDish(dishType) {
    var randomDish = Math.floor(Math.random() * dishType.length);
    return randomDish;
}

/* ------------- Generate Random Meal ------------- */
function genRandomMeal(sides, mains, desserts){
    var randomMeal = genRandomDish(mains) + " with a side of " + 
    genRandomDish(sides) + " and " + genRandomDish(desserts) + " for dessert!";
    return randomMeal;
}

function clearSelection() {
    document.getElementsByClassName('radAnswer').checked = false;
    document.querySelector('side-option').checked = false;
    document.querySelector('main-option').checked = false;
    document.querySelector('dessert-option').checked = false;
    document.querySelector('meal-option').checked = false;
}