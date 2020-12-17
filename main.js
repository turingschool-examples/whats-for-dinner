// Create variables targetting the relevant DOM elements here.



// Add your event listeners here




// Create your event handlers and other functions here.
function unhide(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
