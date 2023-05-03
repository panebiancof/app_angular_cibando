/**
 * Angular è un framework che utilizza come linguaggio Typescript
 * Typescript è un'evoluzione di Javascript. Javascript è un linguaggio
 * lato client usato sul Front-end.
 * Il client è il browser, chrome interpreta HTML CSS e JS.
 * JavaScript è usato per rendere interattive le pagine web.
 *
 * Cos'è una Variabile?  E' un contenitore di Dati, un dato alla volta.
 * Esempio pratico è un bicchiere. A pranzo ho l'acqua e lasera la birra.
 * Stessa variabile ma contenuto diverso.
 *
 * 1.Introduzione a Javascript
 * 2.I Data Types
 * 3.Le variabili
 * 4.Le costanti
 * 5.Gli operatori
 * 6.Gli array
 * 7.Gli oggetti
 * 8.I Cicli: while e for e il for of
 * 9.I metodi sulle stringhe e con le array
 */

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Elenco Allievi</h1>`;

/**
 * variabili in JS --- nome = valore;
 * VALORI: Stringa(testo alfanumerico), Numeri, Boolean, Array, Object, Null, Undefined
 *
 */

// var e let fanno la stessa cosa ma cambia lo scope (locale o globale)
var nominativo = 'Francesco';
let nominativo2 = 'Ciccio';
const nominativo3 = 'Pippo'; // è una costante, non può essere cambiata

//document.write(nominativo);

console.log(nominativo);
nominativo = "Frank";
console.log(nominativo);

var eta = 15;
var accetto = true;

console.log("Nome cliente: "+nominativo+ ", età: "+eta+" anni. Contratto accettato: "+accetto);

console.log("Nome cliente: ",nominativo, ", età: ",eta," anni. Contratto accettato: ",accetto);

//document.write("Nome cliente: ",nominativo, "<br> età: ",eta," anni. Contratto accettato: ",accetto);

var anno_nascita = 1983;
var anno_corrente = 2023;
var anni = anno_corrente - anno_nascita;
console.log("Anni: "+ anni);

/**
 * Costrutti condizionali JS
 * if, if else, if elseif else
 *
 * if (CONDIZIONE1){
  ESPRESSIONE1
}
else{
  ESPRESSIONE2
}

if (CONDIZIONE1){
  ESPRESSIONE1
}
else if(CONDIZIONE2){
  ESPRESSIONE2
}
else{
  ESPRESSIONE3
}
*/

if (eta >= 18){
  console.log(" Sono maggiorenne")
} else
{console.log(" Sono minorenne")
}

/**
 * Operatore Ternario ?:
 * SINTASSI: CONDIZIONE ? ESPRESSIONE_SE_VERA:ESPRESSIONE_SE_FALSA
 */
eta >= 18 ? console.log(" Sono maggiorenne"): console.log(" Sono minorenne");

let messaggio = eta >= 18 ?" Sono maggiorenne": " Sono minorenne";
console.log (messaggio)

//Array
let allievi = ['pippo','pluto','paperino'];
let numeri = ['5','4565','0'];
console.log(allievi);

/**
 * Operatore ciclo FOR e WHILE
 */

// for (valore_iniziale; Condizione, Incremento)
for (let i=0; i<allievi.length; i++ ){
 document.write(allievi[i]+"<br>");
}

//while
let i=0;
while (i<allievi.length ){
  document.write(allievi[i]+"<br>");
  i++;
}

// Object
const alunno_fp = {
  nome: "Francesco",
  cognome: "Panebianco",
  eta: 40,
  accettato: true
}

const alunni = [
  {
  nome: "Francesco",
  cognome: "Panebianco",
  eta: 40,
  accettato: true
},
{  nome: "Mauro",
cognome: "Rossi",
eta: 33,
accettato: false}
]
console.log(alunno_fp.cognome);
console.log(alunni[1].nome);

document.write('<br><br><br> Alunni dentro array:<br>');
let cont = 0;
while (cont < alunni.length) {
  document.write(alunni[cont].nome + ' ' + alunni[cont].cognome + '<br>');
  cont++;
}
