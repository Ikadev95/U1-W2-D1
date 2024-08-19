/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* "I principali datatype in Javascript sono: Number, String, Boolean, Undefind, Null." 
"Number è un tipo di contenitore che può contenere soltanto numeri come 1,2,3."
"String è un tipo di contenitore che può contenere solo caratteri e parole come ad esempio: casa, a , scuola."
"Boolean è un tipo di contenitore che può contenere solo due elementi: True e False."
"Undefind è un contenitore che non ha mai contenuto nessun elemento"
"Null è un contenitore che abbiamo svuotato"
"Esistono poi altri tre datatype: Object, Symbol, BigInt" */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let myName = "Federica"; */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*  const num1 = 12;
const num2 = 20;
let somma = num1 + num2;
console.log(somma); */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12; */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* myName = "Guglielmo";
console.log(myName); */

/* ESERCIZIO 6
 Esegui una sottrazione tra il numero 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* x -= 4;
console.log(x); */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*let name1 = "john";
let name2 = "John";
let control = name1 == name2 ? true : false;
console.log(control);
let control2 = name1 == name2.toLowerCase() ? true : false;
console.log(control2); */
