// dichiarazione

var nome = prompt('Inserisci il tuo nome');
console.log(nome)

var cognome = prompt('Inserisci il tuo cognome');
console.log(cognome)

var colore = prompt('Inserisci il tuo colore preferito');
console.log(colore)

// operazioni

var risultato = nome + cognome + colore + '79';
document.getElementById("testo").innerHTML = risultato;
