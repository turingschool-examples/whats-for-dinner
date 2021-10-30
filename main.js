var letsCookButton = document.querySelector('.letsCookButton');
var clearButton = document.querySelector('.clearButton');
var answer = document.querySelector('.answer');
var icon = document.querySelector('.icon');
var tagline = document.querySelector('.tagline');
var clearButton = document.querySelector(".clearButton");
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
'Hush Puppies'
];
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
'Margarita Pizza'
];
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
'Eclairs'
];

letsCookButton.addEventListener('click', returnResults);
clearButton.addEventListener('click', clearPage);

function returnResults() {
  var choice = document.querySelector('input[name="food"]:checked');
    if (choice === null){
      alert('Please select an option before clicking the button.');
      return;
    } else if (choice === entireMeal) {
      answer.innerHTML = `${randomizer(mains)}, ${randomizer(sides)}, and ${randomizer(desserts)}!`
    } else if (choice === side) {
      answer.innerHTML = `${randomizer(sides)}!`
    } else if (choice === mainDish) {
      answer.innerHTML = `${randomizer(mains)}!`
    } else {
      answer.innerHTML = `${randomizer(desserts)}!`
    };
    icon.classList.add('hidden');
    tagline.classList.remove('hidden');
    clearButton.style.display = "block";
};

function clearPage(){
  location.reload();
}

function randomizer(array){
  return array[Math.floor(Math.random() * array.length)];
}
