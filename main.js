var cookpot = document.querySelector(".cookpot");
var youShouldMake = document.querySelector(".should-make");
var randomizedFoodItem = document.querySelector(".random-food");
var clearBtn = document.querySelector(".clear-btn")
var sideRadioBtn = document.querySelector(".side");
var mainDishRadioBtn = document.querySelector(".main-dish");
var dessertRadioBtn = document.querySelector(".dessert");
var entireMealBtn = document.querySelector(".entire-meal")
var randomFoodPlacement = document.querySelector(".random-food")
var letsCookBtn = document.querySelector(".cook-btn");
var form = document.querySelector(".all-radio-btns")
var radioBtns = document.getElementsByName("looking-for");


form.addEventListener("click", enableLetsCookBtn);


letsCookBtn.addEventListener("click", function(event) {
  event.preventDefault();
  generateNewMenuItem();
});


clearBtn.addEventListener("click", function() {
  clearRadioBtns(form);
  returnEmptyBox();
});


function clearRadioBtns() {
  for (var i = 0; i < radioBtns.length; i++) {
    radioBtns[i].checked = false;
  }
};


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


function show(element) {
  element.classList.remove("hidden")
};


function hide(element) {
  element.classList.add("hidden")
};


function showNewMenuItem() {
  hide(cookpot);
  show(youShouldMake);
  show(randomizedFoodItem);
  show(clearBtn)
};


function returnEmptyBox() {
  show(cookpot);
  hide(youShouldMake);
  hide(randomizedFoodItem);
  hide(clearBtn)
};


function generateNewMenuItem() {
  if (sideRadioBtn.checked) {
    randomFoodPlacement.innerText = sides[getRandomIndex(sides)];
  } else if (mainDishRadioBtn.checked) {
    randomFoodPlacement.innerText = mains[getRandomIndex(mains)];
  } else if (dessertRadioBtn.checked) {
    randomFoodPlacement.innerText = desserts[getRandomIndex(desserts)];
  } else if (entireMealBtn.checked) {
    randomFoodPlacement.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
  };
  showNewMenuItem();
};


function enableLetsCookBtn() {
  if (sideRadioBtn.checked || mainDishRadioBtn.checked || dessertRadioBtn.checked || entireMealBtn.checked) {
    letsCookBtn.removeAttribute('disabled');
  }
};
