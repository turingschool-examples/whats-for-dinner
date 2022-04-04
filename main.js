var letsCookButton = document.querySelector("#lets-cook-button");
var resultBox = document.querySelector(".result-box");

letsCookButton.addEventListener('click', showFood);

function showFood() {
  event.preventDefault();
  resultBox.innerText = "not a cookpot!"
};

var sides = [
  'Chips & Guac',
  'Musubi',
  'Roasted Brussels Sprouts'
];

var mains = [
  'Carnitas Burrito',
  'BBQ Ribs',
  'Sushi'
];

var desserts = [
  'Ice Cream',
  'Rice Crispy Treats',
  'Tiramisu'
];
