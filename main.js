//food arrays

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
];

var mains = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'
]

var desserts = [
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

// var entireMeal = [
// ];



//querySelectors
var clearBtn= document.querySelector('.clear-btn')
var addRecipeBtn = document.querySelector('.recipe-btn');
var letsCookBtn = document.querySelector('.cook-btn');
var radioSidesBtn = document.querySelector('.sides-option');
var radioMainsBtn = document.querySelector('.mains-option');
var radioDessertsBtn = document.querySelector('.desserts-option');
var radioEntireBtn = document.querySelector('.entire-meal-option');
var cookPot = document.querySelector('.cook-pot-img');
var youMake = document.querySelector('.you-make');




var foodRecommendation = document.querySelector('.food-recommendation')

//eventListeners
//buttons
//does the below button even need functionality? in the cyoa it  does
// addRecipeBtn.addEventListener('click', addRecipe);

letsCookBtn.addEventListener('click', letsCook);
// radioSidesBtn.addEventListener('click', letsCook);
// radioMainsBtn.addEventListener('click', letsCook);
// radioDessertsBtn.addEventListener('click', letsCook);
// radioEntireBtn.addEventListener('click', letsCook);
//




//object for meal? or individual foods? do i even need this?
// maybe to push into full meal array for if i get to the CYOA? A full meal array?
//would it update to output a full array?
//do i need a class instead or at all?
//i think i do because of there are several arrays running but can they just pass through the object?

// class Foods {
//   constructor (sides, mains, desserts, entireMeal) {
//     this.sides = sides;
//     this.mains = mains;
//     this.desserts = desserts;
//     //not sure if entireMeal can go into the constructor?
//     //this is possible going to be its own object instead?
//     //leave out of constructor ?
//     //should it have its own object instance instead? how to do?
//     this.entireMeal = entireMeal;
//   }
// };

//do i need new vars for each?
//object literal for all sans entireMeal
//need to assign these to the class above?
// var foodSuggestionSides
//
// var foodSuggestionsMains
//
// var foodSuggestionsDesserts
//
// var entireMeal = {
//   sides: sides,
//   mains: mains,
//   desserts: desserts,
//
// }

//functions

//this function will grant access to one of the 3 arrays
//eventually will give option also for whole meal selection
//technically will need 3 functions w/in this for
//sides - mains - desserts
//if i get to cyoa can entire meal go in here also? i think so
//will need to create a for loop i think to run through function
//do i need to have a random math function like last weekend's project?

// class Foods {
//   constructor (sides, mains, desserts, entireMeal) {
//     this.sides = sides;
//     this.mains = mains;
//     this.desserts = desserts;
//     //not sure if entireMeal can go into the constructor?
//     //this is possible going to be its own object instead?
//     //leave out of constructor ?
//     //should it have its own object instance instead? how to do?
//     this.entireMeal = entireMeal;
//   }
// };

// function selectRadioSides ()
//
// function selectRadioMains()
//
// function selectRadioDesserts()



//do i need a random math function like we used last weekend?
//can i use the same? does it make sense?

function checkRadioButton () {
  if(radioSidesBtn.checked) {
     return sides[getRandomIndex(sides)];
}
  if(radioMainsBtn.checked) {
    return mains[getRandomIndex(mains)];
}
  if(radioDessertsBtn.checked) {
    return desserts[getRandomIndex(desserts)];
}

}


       function letsCook (event) {
         event.preventDefault()
         var dish = checkRadioButton()
         foodRecommendation.innerText = dish;
         foodRecommendation.classList.remove('hidden');
         cookPot.classList.add('hidden');
         clearBtn.classList.remove('hidden');
         youMake.classList.remove('hidden');
       }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// var youMake = document.querySelector('.you-make');


// clearBtn.classList.remove('hidden');
var youMake = document.querySelector('.you-make')


//would this work like last project or does it need to be one function per food/meal type?

// function hide(element) {
//   element.classList.add('hidden');
// };
//
// function show(element) {
//   element.classList.remove('hidden');
// };

// function showFoodItem() {
//   hide(COOK POT IMAGE);
//   show(SIDES);
//   show(MAINS);
//   show(DESSERTS);
// };

// function showCookPot() {
//   show(COOK POT IMAGE);
//   hide(SIDES);
//   hide(MAINS);
//   hide(DESSERTS);
//  // };
// };
