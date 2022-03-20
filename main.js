
//QUERY SELECTORS//
const cookButton = document.querySelector('.cook-click');
let dishTitle = document.querySelector('.dish-title');
let dishText = document.querySelector('.dish-text');
const potImage = document.querySelector('.cookpot');
const clearButton = document.querySelector('.clear-button')

//**EVENT LISTENER**//
cookButton.addEventListener('click', displayMeal);
clearButton.addEventListener('click', resetPage);

//**FUNCTIONS**//
function resetPage(){
  event.preventDefault();
  potImage.classList.remove('hidden');
  dishTitle.classList.add('hidden');
  dishText.classList.add('hidden');
  clearButton.classList.add('hidden');
}

function displayMeal(){
  event.preventDefault();
  dishText.innerText = getRecipe();
  potImage.classList.add('hidden');
  dishTitle.classList.remove('hidden');
  dishText.classList.remove('hidden');
  clearButton.classList.remove('hidden');
};

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

function getRecipe(){
  let grabRadio = document.querySelector('input[name="meal-options"]:checked');
  switch(grabRadio.value) {
    case 'sideChoices':
      return `${getRandomElement(sideChoices)}!`
      break;
    case 'mainChoices':
      return `${getRandomElement(mainChoices)}!`
      break;
    case 'dessertChoices':
      return `${getRandomElement(dessertChoices)}!`
      break;
    case 'entireMeal':
      return `${getRandomElement(mainChoices)} with a side of ${getRandomElement(sideChoices)} and ${getRandomElement(dessertChoices)} for dessert!`
      break;
  }
}

//**MEAL CHOICES**//

var sideChoices = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caesar Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Cauli Rice", "Creamed Spinach", "Roasted Broccoli", "Braised Collards", "Hush Puppies"]

var mainChoices = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesan", "Butternut Squash Soup", "BBQ Chicken Burgers", "Bibimbap", "Dumpling Soup", "Bahn Mi", "Burrito", "Kitchen Sink Frittata", "Green Soup", "Pork Belly Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"]

var dessertChoices = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Chocolate Chip Banana Bread", "Peach Cobbler", "Cheesecake", "Flourless Chocolate Cake", "Ice Cream", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]
