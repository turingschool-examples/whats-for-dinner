
var choiceSelector = document.querySelector('input.cook-button');

choiceSelector.addEventListener("click", function(e) {
  e.preventDefault();

  var choice = document.querySelector('input[name="choice"]:checked').value;

  console.log(choice)
})


