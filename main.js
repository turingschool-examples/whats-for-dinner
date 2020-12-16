
var choiceSelector = document.querySelector('input.cook-button');
var resultSelector = document.querySelector('.result');
var imgSelector = document.querySelector('img#cookpot');

choiceSelector.addEventListener("click", function(e) {
  e.preventDefault();
  console.log(e)

  var choice = document.querySelector('input[name="choice"]:checked').value;
  console.log(choice);
  //
  // // hand that choice to a helper function
  // getMeal(choice)
})

function getMeal(choice) {
  if (choice === "side") {
    var randomSide = randomGenerator(sides)
    imgSelector.classList.add('hidden')
    resultSelector.innerHTML = `You should totally make: <h3>${randomSide}`
  } else if (choice === "main-dish") {

  } else if (choice === "dessert") {

  } else if (choice === "entire-meal") {

  } else {
    return alert("You must make a choice of the type of meal you want.")
  }

}

function randomGenerator(arr) {
  return Math.floor(Math.random() * arr.length);
}

