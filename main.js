var cookBtn = document.querySelector('.lets-cook-btn');

cookBtn.addEventListener('click', getRadioValue)

function getRadioValue() {
  var radio = document.getElementsByName('meal-radio');
  for (i = 0; i < radio.length; i++){
    if(radio[i].checked)
    alert(radio[i].value);

  }
}


