var letsCookButton = document.querySelector('.cook-button')
var potImage = document.querySelector('.image')
var chosenOption = document.querySelector('.chosen-dish')
var radioButtons = document.querySelectorAll('input[name="choose-one"]')
var dishOption = document.querySelector('.dish-option')

var sides = [
  'Fresh green beans',
  'Sauteed zucchini and squash',
  'Fruit salad',
  'Roasted veggies',
  'Garden salad',
  'Mashed potatoes',
  'White rice',
  "Mexican corn off the cob"
];

var mainDishes = [
  'Pesto Pasta with Chicken',
  'Stuffed Green Peppers',
  'Rib Eye Roast',
  'Deep Fried Turkey',
  'Meatball Stroganoff',
  'Meatloaf',
  'Rigatoni Florentine',
  'Bourbon Glazed Ham'
]

var desserts = [
  'Chocolate chip cookies',
  'Apple pie',
  'Cheesecake',
  'Pecan pie',
  'Carrot cake',
  'Ice cream',
  'Boston cream pie',
  'Banana pudding',
]

letsCookButton.addEventListener('click', generateRandomOption)
letsCookButton.addEventListener('click', changeDisplay)

function getRandomIndex(array) {
  var newRandomIndex = Math.floor(Math.random() * array.length);
  return array[newRandomIndex]
}

function changeDisplay(){
  potImage.classList.add('hidden')
  chosenOption.classList.remove('hidden')
}

function generateRandomOption(){
  var selectedDish;
  for (let i = 0; i < radioButtons.length; i++){
    if (radioButtons[i].checked){
      selectedDish = radioButtons[i].value
    }
  }
  if(selectedDish === 'Sides'){
    dishOption.innerText = `${getRandomIndex(sides)}!`
  } else if (selectedDish === 'main-dishes'){
    dishOption.innerText = `${getRandomIndex(mainDishes)}!`
  } else if (selectedDish === 'dessert'){
    dishOption.innerText = `${getRandomIndex(desserts)}!`
  }
}
