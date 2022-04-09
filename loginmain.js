let display = document.querySelector(".display");
let username = document.getElementById("input0");
let theme = document.getElementById("customizeTheme");
let submitButton = document.getElementById("submit");

//addEventListener('storage', function(e){
//   console.log(`The value of the ${e.key} changed for the ${e.domain}.`);
//});

submitButton.addEventListener("click", storeData)

//function render() {
//  display.innerHTML += `<section class="log-in-form">
//  <div class="input"><input type="text" name="user-log-in" class="input-field" id="input0" value="">
//  <label for="name">Username: </label></div>
//  <div class="input"><input type="text" name="user-log-in" class="input-field" id="input1" value="">
//  <label for="theme">Choose a Theme: </label></div>
//  </section>`
//}



//render();



// Set name:value pair to local storage: window.localStorage.setItem('theme','dark');

function storeData() {
  let inputUserName = username.value
  window.localStorage.setItem("username", inputUserName)
  let inputColorTheme = theme.value
  window.localStorage.setItem("theme", inputColorTheme)
}
