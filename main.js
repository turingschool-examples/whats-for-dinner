var Side = [
    'Miso',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
]

var Main = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
]

var Dessert = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
]
var newVar;
var selectedValue = document.getElementById('meal');
var imageBox = document.getElementById('mealbox');
console.log(imageBox);


console.log(imageBox,"after");
selectedValue.addEventListener('submit', function(event){
    printSelection(event);});

function printSelection(event){
    event.preventDefault();
    if(document.querySelector('input[name="Meals"]:checked')){
        var selectedOption = document.querySelector('input[name="Meals"]:checked').value;
        var mealArray = chooseArray(selectedOption);
        console.log(mealArray);
        var randChoice = Math.floor(Math.random() * mealArray.length);
        imageBox.innerHTML = 
        `<article class="mealchoice">
            <em>You should make:</em>
            <h2>${mealArray[randChoice]} !</h2>
            <button class="remove" id="reset">Reset</button>
        </article>`;
    console.log(selectedOption);
    }
else{
    console.log("No value selected");
}
};

function chooseArray(selectedMeal){
    
    if(selectedMeal=== 'Side'){
        return Side;
    }
    else if(selectedMeal === 'Dessert'){
        return Dessert;
    }
    else{
        return Main
    }
}

    
