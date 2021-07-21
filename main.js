var mealOptionForm = document.getElementById('meal-option-form');
var radioButtons = document.getElementsByName('options')

mealOptionForm.addEventListener('submit', checkCheckedButton);


function checkCheckedButton(event){
    event.preventDefault();
    for(var i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked){
            if(radioButtons[i].id === 'side'){
                console.log('checked: ', radioButtons[i].id);
            } else if(radioButtons[i].id === 'main-dish'){
                console.log('checked: ', radioButtons[i].id)
            } else if(radioButtons[i].id === 'dessert'){
                console.log('checked: ', radioButtons[i].id)
            } else if(radioButtons[i].id === 'entire-meal'){
                console.log('checked: ', radioButtons[i].id)
            }
        }
    }
}