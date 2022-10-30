var loginButton = document.querySelector('.login-button')
var loginPage = document.querySelector('.login-page')
var mainPage = document.querySelector('.main-page')
var userNameInput = document.querySelector('.user-name')
var topOfPage = document.querySelector('.header')


var mainPageHeader = document.querySelector('.header')
var addRecipeButton = document.querySelector('.add-recipe')

loginButton.addEventListener('click', goToMainPage)

function goToMainPage() {
    loginPage.classList.add('hidden')
    mainPage.classList.remove('hidden')
    mainPageHeader.classList.remove('hidden')
    addRecipeButton.classList.remove('hidden')
    
    topOfPage.innerHTML += `
    <h1 class="title">What dish you looking for, ${userNameInput.value}?</h1>`
}


