var radioButtons = document.querySelectorAll('input[name="food-type"]');
var submitButton = document.querySelector("#lets-cook");
var renderChoice = document.querySelector("#dish-suggestions");
var clearButton = document.querySelector("#clear");

var food = {
sides: ["Grilled Watermelon", "Classic Coleslaw", "Mexican Street Corn", "Red Potato Salad", "Corn and Black Bean Salsa", "Southern Fried Okra", "Grilled Corn on the Cob", "Pepper Parmesan Biscuits", "Maple Bacon Brussels Sprouts", "Sweet Potato Casserole with Marshmallow", "Butternut Squash Casserole", "Creamy Potatoes with Chives", "Honey-Glazed Carrots and Parsnips"],

mains: ["Skillet Spaghetti and Meatballs", "Cajun Veggies and Grits", "Enchiladas", "Mac and Cheese Primavera", "Cheddar and Apple Grilled Cheese", "Bowtie Chicken Alfredo", "Baked Ziti", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Chicken Pot Pie with Flakiest Crust Ever", "Margarita Pizza", "Hamburger Soup", "Chicken Spaghetti", "Pretzel-Crusted Chicken with Broccoli", "Roasted Veggies and Chickpeas", "Fried Chicken", "Smoked Brisket"],

desserts: ["Apple Pie", "Black Forest Cake", "Banana Bread", "Funfetti Cake", "Chocolate Cupcakes", "Carmel Brownies", "Quick and Easy Peppermint Fudge", "Chocolate-Dipped Peanut Butter S'mores", "Chocolate Cake in a Mug", "Crazy Chocolate Shakes", "Chocolate Butterscotch Caramel Bars", "Microwave Smores", "Carrot Cake Cookies", "Ice Cream Sundaes", "Lemon Bars", "Chocolate Chip Cookies and Ice Cream", "Rootbeer Floats", "Chocolate-dipped Fruit", "Strawberry and Cream Scones", "Chia Pudding"]
}

submitButton.addEventListener("click", chooseDish);
  
  
  function chooseDish(event) {
    event.preventDefault()
    for (var i = 0; i < 3; i++) {
    if (radioButtons[i].checked) {
    choice = radioButtons[i].value
  } 
  }
  getRandomDish(food[choice])
}

function getRandomDish(foodChoice) {
    var index = Math.floor(Math.random() * foodChoice.length);
    console.log(foodChoice[index])
    return foodChoice[index];
  }

  









