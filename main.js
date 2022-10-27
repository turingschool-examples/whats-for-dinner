// Query selectors here
var cookButton = document.querySelector('#lets-cook');
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var dessertRadio = document.querySelector('#dessert');
var potIcon = document.querySelector('.cookpot-img');
var prompt = document.querySelector('.prompt')
var suggestion = document.querySelector('.suggestion')
var favoriteSection = document.querySelector('.favorite-section')
var favoriteButtons = document.querySelector('.favorite-buttons')
var favorite = document.querySelector('#favorite')
var viewFavorites = document.querySelector('#view-favorite')
var favoriteList = document.querySelector('.favorite-list')
var goBackButton = document.querySelector('.go-back-button')


// Food options
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
    "Hush Puppies"
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
    "Margarita Pizza"
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
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Apple Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
];



// Event Listeners go here
cookButton.addEventListener('click', selectFood)
favorite.addEventListener('click', addFavorite)
viewFavorites.addEventListener('click', showFavorites)
goBackButton.addEventListener('click', goBack)

// Global vars
var selectedFood;
var favoriteFoods = [];
// Functions 

function getRndFood(array) {
    var arrayIndex = Math.floor(Math.random() * array.length);
    return array[arrayIndex];
};

function displayCourse() {
    potIcon.classList.add("hidden");
    prompt.classList.remove("hidden");
    suggestion.classList.remove("hidden");
    favoriteSection.classList.remove("hidden");
};


function selectFood() {
    if (sideRadio.checked == true) {
        selectedFood = getRndFood(sides);
    } else if (mainRadio.checked == true) {
        selectedFood = getRndFood(mains);
    } else if (dessertRadio.checked == true) {
        selectedFood = getRndFood(desserts);
    }
suggestion.innerText = `${selectedFood}!`;
displayCourse()
};

function addFavorite() {
    favoriteFoods.push(selectedFood)
}

function showFavorites() {
    prompt.classList.add("hidden");
    suggestion.classList.add("hidden");
    favoriteSection.classList.add("hidden");
    favoriteList.classList.remove("hidden");
}

function goBack() {
    prompt.classList.remove("hidden");
    suggestion.classList.remove("hidden");
    favoriteSection.classList.remove("hidden");
    favoriteList.classList.add("hidden");
}
