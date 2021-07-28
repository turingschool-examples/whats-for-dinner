var addNewButton = document.querySelector('.add-new-button');
var letsCookButton = document.getElementById('.lets-cook-button');
var clearButton = document.querySelector('.clear-button');

// for javascript/html applications, this is best practice for adding a function to a button
// for frameworks like react, it's good to use an inline onClick() but it can get confusing where to look
// in more simple projects like this

// examples of eventlisteners:
// addRecipeButton.addEventListener('click', toggleFooter)
// letsCookButton.addEventListener('click', genDish)
// clearButton.addEventListener('click', clearSelection)

// i'm not sure what these were doing and it seems like everything is working with them commented out? 
// addNewButton = document.addEventListener("click", null);
// clearButton = document.addEventListener("click", null);

/* ------------- Appearing Add Recipe Footer ------------- */
function toggleFooter() {
    var addRecipeButton = document.querySelector('.add-recipe-button');
    var recipeFooter = document.querySelector('.add-recipe-footer');
    // query selector is used to find an element by either its class or id
    // to indicate that you want to search by class, you have to put a . before the name
    // for an id you start with #

    if (recipeFooter.style.display === 'block') {
        recipeFooter.style.display = 'none';
        addRecipeButton.innerHTML = "ADD A RECIPE";
        // tempRecipeButton = document.querySelector('.add-recipe-button').innerHTML = "ADD A RECIPE";

    } else {
        recipeFooter.style.display = 'block';
        addRecipeButton.innerHTML = "DONE ADDING RECIPES";
        // tempRecipeButton = document.querySelector('.add-recipe-button').innerHTML = "DONE ADDING RECIPES";
    }
}

/* ------------- Generate Random Dish ------------- */
function genDish() {
    var makeRecipe = document.getElementById('result-statement');
    // try to remove all of your console.logs for the finished product as a best practice rule :)

    if (document.getElementById('side-option').checked) {
        makeRecipe.innerText = `${sides[genRandomDish(sides)]}`
        toggleDishDisplay(true, makeRecipe)

    } else if (document.getElementById('main-option').checked) {
        makeRecipe.innerText = `${mains[genRandomDish(mains)]}`
        toggleDishDisplay(true, makeRecipe)

    } else if (document.getElementById('dessert-option').checked) {
        makeRecipe.innerText = `${desserts[genRandomDish(desserts)]}`
        toggleDishDisplay(true, makeRecipe)

    } else if (document.getElementById('meal-option').checked) {
        makeRecipe.innerText = `${sides[genRandomDish(sides)]}` +" with a side of " + 
        `${mains[genRandomDish(mains)]}` + " and " + `${desserts[genRandomDish(desserts)]}` + " for dessert!";
        toggleDishDisplay(true, makeRecipe)

    } else {
        toggleDishDisplay(false)
    }

    // i added a helper function for hiding/displaying the pot
    // the way it was before meant that every time the pot was hidden, it was triggered to display
    // this meant that every time the let's cook button was clicked, the pot would toggle visibility
    // i added a true/false too so that the conditional being met in the toggleDishDisplay function
    // would have something other than the pot's visibility to check
}

function toggleDishDisplay(display, makeRecipe) {
    /* ------------- Hide Pot at Let's Cook Action ------------- */
    var pot = document.getElementById('pot-img');
    var makeText = document.getElementById('make-statement');
    var clearButton = document.getElementById('clear-button');

    if (display === true) {
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
    console.log(`New dish: ${dishName.value} (${dishTypeInput.value})`);
    // just checking that this worked nicely! 
    // now to figure out how to save the new dish into your arrays!
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
    // document.getElementsByClassName('radAnswer').checked = false;
    // maybe you were trying out multiple options, but this isn't needed since you're already selecting all 4 radios below
    // also className and name are different so you'd want to use something like this: 
    // document.querySelectorAll('input[name=radAnswer]') to get all the elements
    // this returns something similar to an array though so you'd have to use a for loop or something to select each item and uncheck it
    // the below option is more efficient in my opinion

    document.querySelector('#side-option').checked = false;
    document.querySelector('#main-option').checked = false;
    document.querySelector('#dessert-option').checked = false;
    document.querySelector('#meal-option').checked = false;

    // just needed a # symbol to indicate that you wanted to select these elements by their IDs
}
