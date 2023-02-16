var letsCookButton = document.querySelector("#meal-choice-button");
var outputBox = document.querySelector('#outputBox');
var cookpotImg = document.querySelector('#cookpot')





letsCookButton.addEventListener("click", function(event) {
    event.preventDefault();
    getDish();
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
        <p id="output-lead"> You should make: </p>
        <h1 id="output-meal"> ${sides[getRandomIndex(sides)]}!</h1>
        `
    } else if (selectedMeal === "main-dish") {
        cookpotImg.classList.add('hidden')
        outputMessage.innerHTML = `
        <p id="output-lead"> You should make: </p>
        <h1 id="output-meal"> ${mains[getRandomIndex(mains)]}!</h1>
        `
    } else if (selectedMeal === "dessert") {
        cookpotImg.classList.add('hidden')
        outputMessage.innerHTML = `
        <p id="output-lead"> You should make: </p>
        <h1 id="output-meal"> ${desserts[getRandomIndex(desserts)]}!</h1>
        `
    }
}