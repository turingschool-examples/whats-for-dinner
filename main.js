var sideDishes = [
    "Asaparugus",
    "Baked Beans",
    "French Fries",
    "Broccoli",
    "Bread Roll",
    "Green Beans",
    "Mac and Cheese",
    "Mashed Potatoes",
    "Salad",
    "Tomato Basil Soup",
    "Miso Glazed Carrots",
    "Coleslaw",
    "Sweet Potatoes",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
];

var mainDishes = [
    "Chicken Cordon Bleu",
    "Meatloaf",
    "Cheese Burger Sliders",
    "Chicken Parmesan",
    "Lasagna",
    "Spaghetti and Meatballs",
    "Sheet Pan Fajitas",
    "Meat Lovers Pizza",
    "BBQ Ribs",
    "Baked Lemon Salmon",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "BBQ Chicken Burgers",
    "Ramen",
];

var dessertDishes = [
    "Strawberry Cheesecake",
    "Butter-pecan Ice-cream",
    "Hot Apple Pie",
    "Chocolate Lava Cake",
    "Peanut Butter Fudge Brownie",
    "Key-lime Pie",
    "Maple White Chocolate Cookie",
    "Banana Pudding",
    "Boston Creme Pie"
];

var currentFoodItem = "";


/*do i need to make a variable for each array since user will 
only select one at a time and will only spit out one random 
variable at a time?*/

//------------------------query selectors
var side = document.querySelector('#side');
var mainDish = document.querySelector('#main-dish');
var dessert = document.querySelector('#dessert');
var entireMeal = document.querySelector('#entire-meal');
var letsCookBtn = document.querySelector('.lets-cook');
var cookpot = document.querySelector('.cookpot');
var foodTitle = document.querySelector('.food-title');
var foodText = document.querySelector('.food-text');
var clearBtn = document.querySelector('.clear-button')

//------------------------event listeners

letsCookBtn.addEventListener('click', cookDinner);
clearBtn.addEventListener('click', clearingButton);



//------------------------functions and event handlers 👇🏿
function randomFood(foodType) {
    if (foodType === 'side') {
       var sideItem = sideDishes[randomIndex(sideDishes)];
        return sideItem;
    } else if (foodType === 'main-dish') {
       var mainItem = mainDishes[randomIndex(mainDishes)];
        return mainItem;
    } else if (foodType === 'dessert') {
       var dessertItem = dessertDishes[randomIndex(dessertDishes)];
       return dessertItem;
    } else {
        var sideItem = sideDishes[randomIndex(sideDishes)];
        var mainItem = mainDishes[randomIndex(mainDishes)];
        var dessertItem = dessertDishes[randomIndex(dessertDishes)];
       return `${mainItem} with a side of ${sideItem} and ${dessertItem} for dessert!`
    }
    // else {
    //     return 'Not a valid option!'
    // }
}

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function cookDinner(){ 
    cookpot.classList.add('hidden');
    foodText.classList.remove('hidden');
    foodTitle.classList.remove('hidden');
    var selectedDinnerItem = document.querySelector('input[name="dinner"]:checked').value;
        currentFoodItem = randomFood(selectedDinnerItem);
    console.log(currentFoodItem);
    foodText.innerText = `${currentFoodItem}!`;
}

function clearingButton() {
    location.reload();
}




// ------------------THINGS TO ADD
// add CLEAR button





  