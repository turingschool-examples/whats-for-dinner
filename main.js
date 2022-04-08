//query selectors
var cookButton = document.querySelector('.lets-cook')
var showFoodArea = document.querySelector('.cookpot-container')


//DATA MODEL
var sides = ['Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'];
var mainDishes = ['Spaghetti and Meatballs',
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
var desserts = ['Apple Pie',
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

//event listeners
cookButton.addEventListener('click', randomFood )
//event handlers

function randomFood(){
  var allFoods ={sides:sides,
    mainDishes:mainDishes,
    desserts:desserts};

  selectedBtn = document.querySelector('input[name="radio-btn"]:checked').value;
  randomItem(allFoods[selectedBtn])
}

function randomItem(food){
  var randomItem = food[Math.floor(Math.random()*food.length)]
  showFoodArea.innerHTML= `<h4> You should make </h4>
                            <h2>${randomItem}</h2>`
  }
