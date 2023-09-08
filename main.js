//Javascript main file linked into HTML by: <script type="text/javascript" src="main.js"></script>

// QUERY SELECTOR VARIABLES go here 👇
var sideButton = document.querySelector('#side')
var mainButton = document.querySelector('#main')
var dessertButton = document.querySelector('#dessert')
var mealButton = document.querySelector('#meal')
var letsCookButton = document.querySelector('.lets-cook')

var potImage = document.querySelector('.pot-image')
var randomText = document.querySelector('.random-text')

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

var meals = [
'Omelette',
  'Chicken Alfredo',
  'Grilled Salmon',
  'Chocolate Cake',
  'Caesar Salad',
  'Margarita Pizza',
  'California Roll',
  'Cheeseburger',
  'Taco Salad',
  'Spaghetti Carbonara',
  'Fruit Salad',
  'Club Sandwich',
  'Beef Stir-Fry',
  'Ice Cream Sundae',
  'Vegetable Curry'
];

//EVENT LISTENERS HERE! 👇 TELLING COMPUTER TO LISTEN TO CLICK:
sideButton.addEventListener('click', generateRandomDish)
mainButton.addEventListener('click', generateRandomDish)
dessertButton.addEventListener('click',generateRandomDish)
mealButton.addEventListener('click',generateRandomDish)
letsCookButton.addEventListener('click',generateRandomDish)
// FUNCTIONS AND EVENT HANDLERS GO HERE 👇 (we've provided two to get you started)!

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateRandomDish(event) {
    event.preventDefault();
    //if user clicks side button
    var randomSides = sides[getRandomIndex(sides)];
    var randomMains = mains[getRandomIndex(mains)];
    var randomDesserts = desserts[getRandomIndex(desserts)];
    var randomMeals = meals[getRandomIndex(meals)];

    if (sideButton.checked) {
        randomText.innerText = `<section id="random-side">
        <h3>You should make</h3>
        <h1>${randomSides}!</h1>
        </section>`;
    } else if (mainButton.checked) {
        randomText.innerHTML = `<section id="random-main">
        <h3>You should make</h3>
        <h1>${randomMains}!</h1>
        </section>`;
    } else if (randomDesserts.checked) {
        randomText.innerHTML = `<section id="random-dessert">
        <h3>You should make</h3>
        <h1>${randomDesserts}!</h1> 
        </section>`;
    } else if (randomMeals.checked) {
        randomText.innerHTML = `<section id="random-meal">
        <h3>You should make</h3>
        <h1>${randomMeals}!</h1>
        </section>`;
    } else {
        potImage.classList.remove('hidden');
        randomText.classList.add("hidden");
    }
    potImage.classList.add('hidden');
    randomText.classList.remove("hidden");
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