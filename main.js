// Intermediate CSS
// Do some research and determine how to make your app respond to the user’s screen size.
// Layout and spacing should adapt to mobile, tablet, desktop and extra large screens.
// Add a loading animation when a user clicks the “Let’s Cook” button to simulate searching for a recipe. Hint - You will need to use CSS Keyframes, and a Javascript timeout function for this.
// Make your buttons grow in size or change color when the user hovers over them, enticing them to click the dang thing.
// When the recipe appears, the text should fade in.
// Remember your user experience and animate these things in gradually. Timing is everything!

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
    'Hush Puppies']

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
    'Margarita Pizza']

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
    'Eclairs']


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

var sideRadioButton = document.querySelector('#side')
var mainRadioButton = document.querySelector('#main-dish')
var dessertRadioButton = document.querySelector('#dessert')
var letsCookButton = document.querySelector('.lets-cook')
var cookPotBox = document.querySelector('.box')

letsCookButton.addEventListener('click', showRandomMealType)

function showRandomMealType() {

    var sideRadioButton = getRandomIndex(sides)
    var mainRadioButton = getRandomIndex(mains)
    var dessertRadioButton = getRandomIndex(desserts)

    sides = sides[sideRadioButton],
    mains = mains[mainRadioButton],
    desserts = desserts[dessertRadioButton],
}
