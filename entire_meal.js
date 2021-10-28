var allMeals = {
  mealSides: [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies",
  ],

  mealMains: [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza",
  ],

  mealDesserts: [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs",
    ]
}

function randomMeal(mealProperties) {
  return Math.floor(Math.random() * mealProperties.length));
}

var entireMeal = [];

function createEntireMeal() {
  entireMeal.push(allMeals.mealSides[randomEntireMeal(allMeals.mealSides)]),
  entireMeal.push(allMeals.mealMains[randomEntireMeal(allMeals.mealMains)]),
  entireMeal.push(allMeals.mealDesserts[randomEntireMeal(allMeals.mealDesserts)])

  console.log(entireMeal);
}
