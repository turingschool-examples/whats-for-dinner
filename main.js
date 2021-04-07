var letsCookButton = ".lets-cook"

document.getElementById('prob2').addEventListener('change', msg1);



if (document.querySelector('input[name="contract_duration"]')) {
  document.querySelectorAll('input[name="contract_duration"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      var item = event.target.value;
      console.log(item);
    });
  });
}
