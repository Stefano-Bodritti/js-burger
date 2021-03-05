// 1. dichiarazione variabili
var calculate = document.getElementById('calculate');
var burgerName = document.getElementById('burger_name');

// 2. evento al click del button
calculate.addEventListener('click',
  function() {

    // 3. verifico se inserito nome burger
    if (burgerName.value != "") {

    } else {
      alert("Inserisci il nome del panino")
    }
  }
);
