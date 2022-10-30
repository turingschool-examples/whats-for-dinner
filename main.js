var loginButton = document.querySelector('.login-button')
var loginPage = document.querySelector('.login-page')
var mainPage = document.querySelector('.main-page')


var mainPageHeader = document.querySelector('.header')
var addRecipeButton = document.querySelector('.add-recipe')

loginButton.addEventListener('click', goToMainPage)

function goToMainPage() {
    loginPage.classList.add('hidden')
    mainPage.classList.remove('hidden')
    mainPageHeader.classList.remove('hidden')
    addRecipeButton.classList.remove('hidden')

}
