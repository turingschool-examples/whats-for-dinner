var mealOptionForm = document.getElementById('meal-option-form');
var radioButtons = document.getElementsByName('options');
var cookPotImg = document.getElementById('cook-pot');
var recipeText = document.getElementById('recipe-text');
var shouldMakeText = document.getElementById('should-make-text');
var letsCookBtn = document.getElementById('lets-cook-btn');

mealOptionForm.addEventListener('submit', checkCheckedButton);

function disableElement(element){
    element.disabled = true;
}


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function toggleHidden(element){
    element.hidden = !element.hidden;
}

function checkCheckedButton(event){
    event.preventDefault();
    for(var i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked){
            if(radioButtons[i].id === 'side'){
                toggleHidden(cookPotImg);
                toggleHidden(shouldMakeText);
                generateRecipeText(side);
                disableElement(letsCookBtn);
            } else if(radioButtons[i].id === 'main-dish'){
                toggleHidden(cookPotImg);
                toggleHidden(shouldMakeText);
                generateRecipeText(mainDish);
                disableElement(letsCookBtn);
            } else if(radioButtons[i].id === 'dessert'){
                toggleHidden(cookPotImg);
                toggleHidden(shouldMakeText);
                generateRecipeText(dessert);
                disableElement(letsCookBtn);
            } else if(radioButtons[i].id === 'entire-meal'){
                console.log('checked: ', radioButtons[i].id)
            }
        }
    }
}

function getRandomRecipe(recipeType) {
    return recipeType[getRandomIndex(recipeType)];
}

function generateRecipeText(recipeType){
    var newDiv = document.createElement('div');
    newDiv.innerText = getRandomRecipe(recipeType) + '!';
    recipeText.appendChild(newDiv);
}