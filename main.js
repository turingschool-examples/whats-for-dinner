var letsCookButton = document.querySelector("#meal-choice-button");
var outputBox = document.querySelector('#outputBox');
var cookpotImg = document.querySelector('#cookpot');
var submitButton = document.querySelector('#meal-choice-button');





letsCookButton.addEventListener("click", function(event) {
    event.preventDefault();
    getDish();
    submitButton.classList.add('loading');
    setTimeout(function() {
        submitButton.classList.remove('loading');
    }, 1000)
}
)




function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getDish() {
    let selectedMeal = document.querySelector('input[name="meal"]:checked').value;
    let outputMessage = document.querySelector('#output-message');
    if (selectedMeal === "side") {
        cookpotImg.classList.add('hidden')
        outputMessage.innerHTML = `
        <p id="output-lead" class="fade-in"> You should make: </p>
        <h1 id="output-meal" class="fade-in"> ${sides[getRandomIndex(sides)]}!</h1>
        `
    } else if (selectedMeal === "main-dish") {
        cookpotImg.classList.add('hidden')
        outputMessage.innerHTML = `
        <p id="output-lead" class="fade-in"> You should make: </p>
        <h1 id="output-meal" class="fade-in"> ${mains[getRandomIndex(mains)]}!</h1>
        `
    } else if (selectedMeal === "dessert") {
        cookpotImg.classList.add('hidden')
        outputMessage.innerHTML = `
        <p id="output-lead" class="fade-in"> You should make: </p>
        <h1 id="output-meal" class="fade-in"> ${desserts[getRandomIndex(desserts)]}!</h1>
        `
    }
}