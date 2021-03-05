// 1. dichiarazione variabili
var calculate = document.getElementById('calculate');
var burgerName = document.getElementById('burger_name');
var ingredients = document.getElementsByClassName('ingredients');
var discount = document.getElementById('discount');
var listaCoupon = ["12354ABCDEF", "Stefano27", "bestburgerever"];

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
        }
      }

      // 5. verifico se il coupon inserito fa parte della lista
      if (listaCoupon.includes(discount.value)) {
        totale -= totale * 0.2;
      }

      // 6. stampo totale
      document.getElementById('total').innerHTML = "$ " + totale.toFixed(2);

    } else {
      alert("Inserisci il nome del panino")
    }
  }
);
