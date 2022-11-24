//1 dare la possibilità di inserire il nome
let nome = prompt('inserisci il tuo nome');
console.log(nome);

//2 dare la possibilità di inserire il cognome
let cognome = prompt('inserisci il tuo cognome');
console.log(cognome);

//3 dare la possibilità di inserire il colore preferito
let colore = prompt('inserisci il tuo colore preferito');
console.log(colore);

//4 concatenare i valori delle variabile e concatenare il numero 21 a fine stringa
let conc_stringa =  nome + cognome + colore + "21";

//5 stampo il risultato su schermo
document.getElementById('password').innerHTML = `la tua password è ${conc_stringa}`;