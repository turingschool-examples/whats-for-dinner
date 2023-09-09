//Javascript main file linked into HTML by: <script type="text/javascript" src="main.js"></script>

// QUERY SELECTOR VARIABLES go here 👇
var sideButton = document.querySelector('#side')
var mainButton = document.querySelector('#main')
var dessertButton = document.querySelector('#dessert')
var mealButton = document.querySelector('#meal')
var letsCookButton = document.querySelector('.lets-cook')

var potImage = document.querySelector('.pot-image')
var randomText = document.querySelector('.random-text')
var clearButton = document.querySelector('.clear-button')

// DATA MODEL 👇
var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
]

var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesan',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
]

var desserts = [
    'Desserts',
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
]

var meals = [];

//EVENT LISTENERS HERE! 👇 TELLING COMPUTER TO LISTEN TO CLICK:
//ANY Form input (e.g radio buttons, text boxes under a form)
//bc it's a form, there are methods you can apply for inputs to be checked... don't need event listeners typically 
letsCookButton.addEventListener('click',generateRandomDish, showPrompt)
// FUNCTIONS AND EVENT HANDLERS GO HERE 👇 (we've provided two to get you started)!

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateRandomDish(event) {
    //event.target - returns element that had put the event on. e.c lets cook button(element) that click event is being selected on... and radio button that click event is
    console.log(event.target)
    // console.log(event) - shows that it's getting the event
    event.preventDefault(); //QUESTION: usu event.preventDefault is used for any input buttons under a <form>
    //the event we are preventing is refreshing the page.
    //every button default event is to refresh page? Can double check and ask instructors
    //if user clicks side button
    var randomSides = sides[getRandomIndex(sides)];
    var randomMains = mains[getRandomIndex(mains)];
    var randomDesserts = desserts[getRandomIndex(desserts)];
    //one function:
    if (sideButton.checked) {
        randomText.innerHTML = `<section class="prompt" id="random-side">
        <h3>You should make</h3>
        <h1>${randomSides}!</h1>
        </section>`; //innerHTML is when you want to edit the entire HTML element: add child elements to the parent element (always adding child elements)
        showPrompt(event)
    } else if (mainButton.checked) {
        randomText.innerHTML = `<section class="prompt" id="random-main">
        <h3>You should make</h3>
        <h1>${randomMains}!</h1>
        </section>`; //innerText: just changing text within the element itself seen b/t ><
        showPrompt(event)
    } else if (dessertButton.checked) {
        randomText.innerHTML = `<section class="prompt" id="random-dessert">
        <h3>You should make</h3>
        <h1>${randomDesserts}!</h1> 
        </section>`;
        showPrompt(event)
        // potImage.classList.add('hidden');
        // randomText.classList.remove("hidden");
    } else if (mealButton.checked) {
        // var randomMeals = meals[getRandomIndex(meals)];
        randomText.innerHTML = `<section class="prompt" id="random-meal">
        <h3>You should make</h3>
        <h1>${randomMains} with a side of ${randomSides} and ${randomDesserts} for dessert!</h1>
        </section>`;
        meals.push(randomText.innerHTML)
        clearButton.classList.toggle('hidden')
        showPrompt(event)
        // potImage.classList.add('hidden');
        // randomText.classList.remove("hidden");
    } else {
        potImage.classList.toggle('hidden');
        randomText.classList.toggle("hidden");
    }
 }


 // try puttibng things in parameters! Psuedocode that
// function displayContent() {
//     randomText.innerHTML = `<section id="random-side">
//     <h3>You should make</h3>
//     <h1>${randomSides}!</h1>
//     </section>`
// }
//     randomSides.innerHTML = `<section id="random-side">
//     <h3>You should make</h3>
//     <h1>${randomSides}!</h1>
//     </section>`
//     //one function:
//     if (sideButton.checked) {
//         var randomSides = sides[getRandomIndex(sides)];
//         displayContent() randomText.innerHTML = `<section id="random-side">
//         <h3>You should make</h3>
//         <h1>${randomSides}!</h1>
//         </section>`; //innerHTML is when you want to edit the entire HTML element: add child elements to the parent element (always adding child elements)
//         showPrompt(event)


 //onefunction:
 function showPrompt(event) {
    event.preventDefault()
    potImage.classList.toggle('hidden');
    randomText.classList.toggle("hidden");
    //.toggle - if the class name  is present, it'll remove and if it's not, it'll add
 }

    //create a new section

    // HTML insert hear
    //click on input, grabs random text from that input array
    //accessing values in data model then I want to display

    
    
    //adding dessert! would be updatings data model (display that content) - update whatever current value
    //render DOM
    // potImage.hidden = true

    //generatesRandom() 
    //should show it... remove hidden in HTML where I can do string interprolation for going into each array for the random image?

    



//     newPoster = createPoster(newImageURL, newTitle, newQuote); //returns the entire object
//     accessImage.src = newPoster.imageURL; //assigns to newImageURL value = random image in images array.
//     accessTitle.innerText = newPoster.title;
//     accessQuote.innerText = newPoster.quote;
//   }
  
   
    //I have to have the user click one radio button
    //I have to have user click on the lets cook button
    //then it'll show a random element in the array they selected
    //once I click lets cook now: I have to add hidden to the image, and show


//iteration 1: When a user selects a dish option 
//(don’t worry about “Entire Meal”) and then clicks 
//the “Let’s Cook!” button, the user sees a random dish 
//from the list of possible dishes for that category