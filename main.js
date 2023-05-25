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
// var displaySide = document.querySelector('.side');
// var displayDessert = document.querySelector('.dessert');
// var displayMain = document.querySelector('.main');
// var displayEntire = document.querySelector('.entire');
var letsCookButton = document.querySelector('.lets-cook-button');
var radioButtons = document.getElementsByName('dinner');
//........................event listeners.......................

letsCookButton.addEventListener('click', displayFood);

//........................functions ............................
var sideMainDessertEntree; 

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function hideCookingPot(){
  cookingPot.classList.add('hidden');
}


// first select the value of the specified 
function displayFood(){
    for(var i=0; i < radioButtons.length; i++){ 
        if(radioButtons[i].checked){
          sideMainDessertEntree = radioButtons[i].value
        }
    } return sideMainDessertEntree
} 
