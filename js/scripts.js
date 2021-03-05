// 1. dichiarazione variabili
var calculate = document.getElementById('calculate');
var burgerName = document.getElementById('burger_name');
var ingredients = document.getElementsByClassName('ingredients');

// 2. evento al click del button
calculate.addEventListener('click',
  function() {

    // 3. verifico se inserito nome burger
    if (burgerName.value != "") {

      // 4. prendo tutti gli ingredienti e controllo quali sono selezionati
      var totale = 50;
      for (var i = 0; i < ingredients.length; i++) {
        if ( ingredients[i].checked ) {
          // 4a. se selezionato sommo il valore al totale
          totale += parseInt(ingredients[i].value);
          console.log(totale);
        }
      }

    } else {
      alert("Inserisci il nome del panino")
    }
  }
);
