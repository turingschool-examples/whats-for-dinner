//Radio Button HTML Elements 
var side = document.querySelector('#side');
var main = document.querySelector('#main-dish');
var dessert = document.querySelector('#dessert');
var meal = document.querySelector('#entire-meal');
var cookButton = document.querySelector('.button2');
var radios = document.getElementsByName('dish');

//Event Listeners
cookButton.addEventListener('click', function(event) {
  event.preventDefault();
  getRandomDish();
});
         
//Retrieves random arry from index
function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
};

//Return radio button input will access the array 
function getRandomDish() {
  var randomDish;
  var randomNum;
  var userInput;
  var dishString = '';
  for (var i = 0; i < radios.length; i++) {  
    if (radios[i].checked) {
      userInput = radios[i].id;
    }  
  };

  randomNum = getRandomNumber(food[userInput])
  randomDish = food[userInput][randomNum]
  console.log(randomDish)
};