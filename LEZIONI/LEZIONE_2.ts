// Import stylesheets
import './style.css';

// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/**
 * In angular il linguaggio portante è Typescript. Typescript fa le stesse identiche cose di JS, ingloba tutto quello che fa JS ma con delle cose in più.
 *
 * Usato da Angular(da sempre) e React(da 2 anni)
 * Typescript è JS tipizzato, vuol dire che quando si creano le variabili (es: let,var) bisogna obbligatoriamente dirgli di che tipo di variabile si tratta.
 *
 * Quest'assegnare la variabile comporta un controllo al volo
 * per verificare se il tipo è corretto.
 *
 * TIPI
 * primitivi: number,string, boolean,null, undefined
 * complessi: array, object
 * type inference: riconoscimento automatico del tipo
 */

//maniera corretta
let name: string; // tipizzazione
name = 'Ciccio'; // valorizzazione

/**
 * maniera non propriamente corretta, se sò già che devo andare a mettere un numero allora non va scritta così
 */
let eta: number = 48;

/**
 * ma così, col type inference:
 */
let valore = 48;

/**
 * Unione Type - unione di due tipi
 * | pipe che significa Tubo
 * telefono può accettare number oppure string
 */
let telefono: string | number;

// alunni può essere 1 solo elemento oppure una lista
let alunni: string | string[];
alunni = 'Ciccio';

/**
 * Tipizzare gli oggetti tramite interfaccia (adottato da Angular)
 * interface è un modello di quello che voglio fare.
 * Nome in CamelCase, come le gobbe del cammello
 * Sono tutti dati obbligatori, tranne per telefono '?'
 */
interface DatiCliente {
  nome: string;
  cognome: string;
  eta: number;
  telefono?: number;
}

let cliente_1: DatiCliente;
cliente_1 = {
  cognome: 'pasticcio',
  nome: 'ciccio',
  eta: 40,
};

/** LE FUNZIONI
 * nomeDellaFunzione(): tipoValoreDiRitorno{}
 * Funzioni(o detti anche metodi) e valori di ritorno delle funzioni
 * Sono dei piccolo blocchi di codice che servono ad eseguire delle operazioni riutilizzabili.
 * Sarà richiamata ad esempio dopo un evento
 */

function somma(primoNum: number, secondoNum: number) {
  return primoNum + secondoNum;
}

const risultato = somma(5, 2);
//console.log(risultato)

function calcolaEta(annoDiNascita: number, annoAttuale: number): number {
  return annoAttuale - annoDiNascita;
}
let anno1 = 1983;
let anno2 = 2023;
//console.log(calcolaEta(anno1, anno2));

/**
 * metodi preconfezionati che ci da Javascript per operare sulle stringhe e sugli array
 */

let stringa = 'Esempio di stringa';
//document.write(stringa.toLocaleLowerCase());
//document.write(stringa.toUpperCase());
//console.log(stringa.indexOf('s',0));
//console.log(stringa.replace('Esempio',''));
//console.log(stringa.replaceAll('i',''));
//console.log(stringa.slice(2,-2));
//console.log(stringa.slice(2,-2).toUpperCase());

let nomefile1 = 'mare-toscana.jpg';
let nomefile2 = 'montagna-calabria.jpg';

function normalizePhotoName(nome: string) {
  let pos = nome.indexOf('.jpg', 0);
  let res = nome.slice(0, pos).replaceAll('-', ' ');
  return res;
}

console.log(normalizePhotoName(nomefile1));
console.log(normalizePhotoName(nomefile2));

/**
 * Metodo con gli Array
 */

let allievi = ['francesco', 'Danilo', 'Ciccio', 'Koko', 'Francesco'];

/**
 *se dentro l'array esistono i Francesco
 * 1. Strict Equals Operator ( === ) Francesco è diverso da francesco.
 * - x and y are of the same type
 * - x and y are have the same value
 */

let allieviFiltrati = allievi.filter((allievo) => {
  return allievo == 'Francesco';
});

if (allieviFiltrati.length > 0) {
  document.write('Trovate ' + allieviFiltrati.length + ' occorrenze');
} else document.write('Non sono state trovate occorreze');
console.log(allieviFiltrati.length);
