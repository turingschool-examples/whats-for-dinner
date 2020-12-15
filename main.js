
var choiceSelector = document.querySelector('input.cook-button');

choiceSelector.addEventListener("click", function(e) {
  e.preventDefault();

  var choice = document.querySelector('input[name="choice"]:checked').value;

  // hand that choice to a helper function
})

function getMeal(choice) {
  if (choice === "side") {

  } else if (choice === "main-dish") {

  } else if (choice === "dessert") {

  } else if (choice === "entire-meal") {

  } else {
    return alert("You must make a choice of the type of meal you want.")
  }

}

