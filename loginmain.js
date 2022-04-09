let display = document.querySelector(".display");
let username = document.getElementById("input0");
let theme = document.getElementById("customizeTheme");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", storeData)


function storeData() {
  let inputUserName = username.value
  window.localStorage.setItem("username", inputUserName)
  let inputColorTheme = theme.value
  window.localStorage.setItem("theme", inputColorTheme)
}
