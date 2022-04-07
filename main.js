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
var radios = document.getElementsByName('radio-btn')

function randomFood(){
  for (var i = 0; i<radios.length;i++)
  if (radios[i].checked && radios[i].value==1 ){

    var randomSide = sides[Math.floor(Math.random()*sides.length)]
    showFoodArea.innerHTML= `<h4> You should make </h4>
                              <h2>${randomSide}</h2>`

  }else if (radios[i].checked && radios[i].value==2){

    var randomMain = mainDishes[Math.floor(Math.random()*mainDishes.length)]
    showFoodArea.innerHTML= `<h4> You should make </h4>
                              <h2>${randomMain}</h2>`

}else if(radios[i].checked && radios[i].value==3){

  var randomDessert = desserts[Math.floor(Math.random()*desserts.length)]
  showFoodArea.innerHTML= `<h4> You should make </h4>
                            <h2>${randomDessert}</h2>`

}
}
