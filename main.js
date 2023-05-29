// query selector variables below:
var chooseSide = document.querySelector('#side');
var chooseMain = document.querySelector('#main');
var chooseDessert = document.querySelector('#dessert');
var letsCookButton = document.querySelector('button');
var stockPotImage = document.querySelector('#stockpot');
var suggestionBox = document.querySelector('.suggestion-box');
var suggestedItem = document.querySelector('.suggested-item');
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
    "Creme Brulee",
    "Baklava",
    "Flan",
    "Cannoli",
    "Macaroons",
    "Chocolate Mousse",
    "Chocolate Souffle",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Chocolate Croissants",
    "Eclairs"
];
// event listeners below:
letsCookButton.addEventListener('click', showRandomDish);

// functions / event handlers below:
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function showRandomDish(event) {
    event.preventDefault();
    stockPotImage.hidden = true;
    suggestionBox.classList.remove('hidden');
    if (chooseSide.checked) {
      var sideName = sides[getRandomIndex(sides)];
      suggestedItem.innerText = sideName;
    } 
}
// posterTitle.innerText = userInputTitle.value;
// showMyPosterButton.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayUserInputPoster();
// });
// function showRandomPoster () {
//   posterImg.src = images[getRandomIndex(images)];
//   posterTitle.innerText = titles[getRandomIndex(titles)];
//   posterQuotes.innerText = quotes[getRandomIndex(quotes)];
//   currentPoster = createPoster(posterImg.src, posterTitle.innerText, posterQuotes.innerText) 
// }  
//   function createMeal(sides, mains, desserts) {
//     return {
//       id: Date.now(), 
//       sides: sides, 
//       mains: mains, 
//       desserts: desserts
//     }
//   }

// function pickRandomSide() {
//     return sides[getRandomIndex(sides)];
// }

// function pickRandomMain() {
//     return mains[getRandomIndex(mains)];
// }

// function pickRandomDessert() {
//     return desserts[getRandomIndex(desserts)];
// }