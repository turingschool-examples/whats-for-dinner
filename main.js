// data
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
'Hush Puppies'];

var mains =[
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
'Margarita Pizza'];

var desserts= [
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
'Eclairs'];

//........................query selectors ......................
var cookingPot = document.querySelector('.cooking-pot');
var displaySide = document.querySelector('.side');
var displayDessert = document.querySelector('.dessert');
var displayMain = document.querySelector('.main');
var displayEntire = document.querySelector('.entire');


//........................event listeners.......................
displaySide.addEventListener('click', showRandomSide);
displayDessert.addEventListener('click', showRandomDessert);
displayMain.addEventListener('click', showRandomMain);
displayEntire.addEventListener('click', showRandomEntire);


//........................functions ............................
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function hideCookingPot(){
  cookingPot.classList.add('hidden')
}

function showRandomSide(){

}

function showRandomDessert(){

}

function showRandomMain(){

}

function showRandomEntire(){
    
}
