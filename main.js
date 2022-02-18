
//QUERY SELECTORS//

var cookButton = document.querySelector('cook-click')



//**EVENT LISTENERS**//
cookButton.addEventListener('click', )




var cookTitle = document.getElementById('dish-header');
var dishText = document.getElementById('dish-text');
var clearButton = document.getElementById('clear-button');
var cookPot = document.getElementById('cookpot');

cookTitle.style.visibility = 'hidden';
dishText.style.visibility = 'hidden';
clearButton.style.visibility = 'hidden';
cookPot.style.visibility = 'visible';


//TOGGLE INSTEAD HERE???

function viewSide(){
  cookTitle.style.visibility = 'visible';
  dishText.style.visibility = 'visible';
  clearButton.style.visibility = 'visible';
  cookPot.style.visibility = 'hidden';
}

function viewMain(){
  cookTitle.style.visibility = 'visible';
  dishText.style.visibility = 'visible';
  clearButton.style.visibility = 'visible';
  cookPot.style.visibility = 'hidden';
}

function viewDessert(){
  cookTitle.style.visibility = 'visible';
  dishText.style.visibility = 'visible';
  clearButton.style.visibility = 'visible';
  cookPot.style.visibility = 'hidden';
}

function viewEntireMeal(){
  cookTitle.style.visibility = 'visible';
  dishText.style.visibility = 'visible';
  clearButton.style.visibility = 'visible';
  cookPot.style.visibility = 'hidden';
}
















var sideChoices = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caesar Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Cauli Rice", "Creamed Spinach", "Roasted Broccoli", "Braised Collards", "Hush Puppies"]

var mainChoices = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesan", "Butternut Squash Soup", "BBQ Chicken Burgers", "Bibimbap", "Dumpling Soup", "Bahn Mi", "Burrito", "Kitchen Sink Frittata", "Green Soup", "Pork Belly Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"]

var dessertChoices = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Chocolate Chip Banana Bread", "Peach Cobbler", "Cheesecake", "Flourless Chocolate Cake", "Ice Cream", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]
