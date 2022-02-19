
//QUERY SELECTORS//

var cookButton = document.querySelector('.cook-click');
var dishTitle = document.querySelector('.dish-title');
var dishText = document.querySelector('.dish-text');
var potImage = document.querySelector('.cookpot');
var clearButton = document.querySelector('.clear-button')



//**EVENT LISTENER**//
cookButton.addEventListener('click', displayMeal);



//**FUNCTIONS**//

function displayMeal(){
  event.preventDefault();
  dishText.innerText = getRecipe();
  potImage.classList.add('hidden');
  dishTitle.classList.remove('hidden');
  dishText.classList.remove('hidden');
  clearButton.classList.remove('hidden');
};


function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
};


function getRecipe(){
  var grabRadio = document.querySelector('input[name="meal-options"]:checked');
  if(!grabRadio){
  }
    if(grabRadio.value === "sideChoices") {
      return `${getRandomElement(sideChoices)}!`
   }
    else if (grabRadio.value === "mainChoices"){
      return `${getRandomElement(mainChoices)}!`
    }
    else if (grabRadio.value === "dessertChoices"){
      return `${getRandomElement(dessertChoices)}!`
  }
    else if (grabRadio.value === "entireMeal")
      return `${getRandomElement(mainChoices)} with a side of ${getRandomElement(sideChoices)} and ${getRandomElement(dessertChoices)} for dessert!`
};




//**MEAL CHOICES**//

var sideChoices = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caesar Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Cauli Rice", "Creamed Spinach", "Roasted Broccoli", "Braised Collards", "Hush Puppies"]

var mainChoices = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesan", "Butternut Squash Soup", "BBQ Chicken Burgers", "Bibimbap", "Dumpling Soup", "Bahn Mi", "Burrito", "Kitchen Sink Frittata", "Green Soup", "Pork Belly Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"]

var dessertChoices = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Chocolate Chip Banana Bread", "Peach Cobbler", "Cheesecake", "Flourless Chocolate Cake", "Ice Cream", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]
