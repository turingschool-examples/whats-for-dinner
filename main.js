var questionsBox = document.querySelector('.item-1');
var answersBox = document.querySelector('.item-2');
var letsCookButton = document.querySelector('.lets-cook');

questionsBox.innerHTML = `
    <h2>What are you looking for?</h2><br>
    <p><input type="radio" id="side-dish" name="choice" value="side">
    <label for="side">Side Dish</label><br><br>
    <input type="radio" id="main-course" name="choice" value="main">
    <label for="main">Main Course</label><br><br>
    <input type="radio" id="dessert" name="choice" value="dessert">
    <label for="dessert">Dessert</label><br><br>
    <input type="radio" id="entire-meal" name="choice" value="entire-meal">
    <label for="entire-meal">Entire Meal</label><br><br>
    <button class="lets-cook">LET'S COOK</button></p>
`;

answersBox.innerHTML = `
    <img
    src="assets/cookpot.svg"
    alt="cookpot"
    height="150"
    width="150" />
`;

// need listener on the LET'S COOK button. when clicked it should check which of the radios is selected and display relevant information in cookpot box
// color/design button
// document.getElementById("myBtn").disabled = true;