//  


var imageBox = document.querySelector('.image-box')
var toMake = document.querySelector('#dish-recommendation-box')
var letsCookButton = document.querySelector('.letscook-button')
letsCookButton.addEventListener('click', showDish)

function hide(element) {
    element.classList.add("hidden")
}

function show(element) {
    element.classList.remove('hidden')
}

function showDish(){
    hide(imageBox)
    show(toMake)   
}


