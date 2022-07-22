//query selectors below

let chooseNewDishButton = document.querySelector('.selection--submit-button');


//arrays for each course
let sides = [
  "Steamed Edamame",
  "Garden Salad",
  "Seaweed Salad",
  "Ginger Salad",
  "Coconut Shrimp",
  "Hush Puppies",
  "Crispy Potatoes",
  "Garlic Butter Mushrooms",
  "Sweet Potato Fries",
  "Steamed Green Beans",
  "Fruit Salad",
  "Mexican Corn on the Cob",
  "Roasted Veggies",
  "Sauteed Zucchini and Squash",
  "Quinoa and Broccoli Slaw",
  "Ceviche and Taro Chips",
  "Takoyaki"
];

let mains = [
  "Pineapple Chicken",
  "Hawaiian Pizza",
  "Thai Yellow Curry",
  "Bibimbap",
  "BBQ Wings",
  "Yakitori",
  "Creamy Tomato Pasta",
  "Beef Bulgogi",
  "Adobo",
  "Sinigang",
  "Sweet Crispy Korean Fried Chicken",
  "Korean BBQ Pork Ribs",
  "Jajangmyeon",
  "Dragon Roll Sushi",
  "Tonkotsu Ramen",
  "Chicken Fried Rice",
  "Pad Thai",
  "Lamb Korma",
  "Chicken Tikka Masala",
  "General Tso Chicken",
  "Sesame Chicken"
];

let desserts = [
  "Apple Pie",
  "Vanila Ice Cream",
  "Mango Ice Cream",
  "Ube Ice Cream",
  "Macaroons",
  "Peach Cobbler",
  "Lemon Meringue Pie",
  "Banana Cream Pie",
  "Black Forest Cake",
  "Pavlova",
  "Pumpkin Pie",
  "Chocolate-Filled Croissants",
  "Halo-Halo",
  "Candied Sweet Potato",
  "Macha Cake",
  "Strawberry Mochi"
];
let currentDish = '';

//event listeners below
chooseNewDishButton.addEventListener('click', showACourseDish);



// functions below
function getRandomArray(arr) {
  return Math.floor(Math.random() * arr.length)
}

function getRandomDish(arr) {
  let dish = new Dish(arr[getRandomArray(arr)]);

  return dish;
}
 

function showACourseDish() {
  currentDish = '';
  let chooseDishType = document.querySelector('input[name="meal-types"]:checked');
  console.log(chooseDishType)
  // I want to check if the input selected Side, Main Dish, or Dessert when the button is pushed
  if (chooseDishType.value === "Sides") {
    console.log(currentDish = getRandomDish(sides));
  } 
  if (chooseDishType.value === "Main-Dish") {
    console.log(currentDish = getRandomDish(mains));
  } 
  if (chooseDishType.value === "Dessert") {
    console.log(currentDish = getRandomDish(desserts));
  }
  
}
// Next, I want the currentDish selected to show in my result-box


