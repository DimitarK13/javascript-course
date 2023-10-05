// alert('Dimitar');
// console.log('Hello World - says Dimitar');
// console.log('This is a second console log');

// ova e single line comment

/* 
    fwbahjfwk
    awdfgwikfewwef
    fewewewfe
    vewfew
*/

// Den 1 zavrsuva ovde

// // Pisuvanje na strings
// console.log(typeof 'Dimitar 23 ;dae@!.');
// console.log(typeof '23');

// // Pisuvanje na brojki
// console.log(typeof 23);
// console.log(23, 5);
// console.log(23.5);

// // Pisuvanje na boolean
// console.log(typeof true);
// console.log(false);
// // Dobivanje booleans preku sporedbi
// console.log(typeof (23 > 15));
// console.log(23 < 15);

// // Dobivanje 'undefined' i 'null'
// console.log(typeof undefined);
// console.log(typeof null);

// console.log('Dimitar"s hungry');
// console.log("Dimitar's hungry");
// console.log(`Dimitar's quote is "Hello World"`);

// // Deklariranje na promenlivi so const
// // Promenlivi koi ne se menuvaat
// const ime = 'Dimitar';
// const prezime = 'Kalapocev';
// console.log('Dimitar', 'Kalapocev');

// // ime = 'Dimitra'; Menuvanje na promenliva so const

// console.log(ime, prezime);

// // Deklariranje na promenlivi so let
// // Promenlivi koi se menuvaat
// let godini = 20;
// console.log(godini);

// godini = 21; // menuvanje na promenliva so let
// console.log(godini);

// // Vistinskata pricina za template literals
// const ime = 'Dimitar';
// const prezime = 'Kalapocev';

// console.log('My name is ' + ime + ' ' + prezime);
// console.log(`My name is ${ime} ${prezime}`);

// // Sobiranje +
// let rezultat = 20 + 10;
// console.log(rezultat);

// // Odzemanje -
// rezultat = 20 - 10;
// console.log(rezultat);

// // Mnozenje *
// rezultat = 20 * 2;
// console.log(rezultat);

// // Delenje /
// rezultat = 20 / 2;
// console.log(rezultat);

// // Eksponencijacija **
// rezultat = 2 ** 5;
// console.log(rezultat);

// // Modul (ostatok pri delenje) %
// rezultat = 10 % 3;
// console.log(rezultat);
// rezultat = 20 % 4;
// console.log(rezultat);

// // Operatori za sporeduvanje > < <= >= === !==
// let rezultat = 23 > 15; // True
// console.log(rezultat);

// rezultat = 23 < 15; // False
// console.log(rezultat);

// rezultat = 15 <= 15; // True
// console.log(rezultat);

// rezultat = 15 >= 15; // True
// console.log(rezultat);

// rezultat = 15 === 15; // True
// console.log(rezultat);

// rezultat = 15 === '15'; // False
// console.log(rezultat);

// rezultat = 15 !== 14; // True
// console.log(rezultat);

// // Ednostaven if... else statement so 2 broja
// if (5 > 5) {
//   console.log(`5 e pogolemo od 2`);
// } else if (5 === 5) {
//   console.log(`5 e ednakvo na 5`);
// } else {
//   console.log(`5 e pomalo od 7`);
// }

// let godini = 18;

// if (godini >= 18) {
//   console.log('Polnoleten. Slobodno prodolzi.');
// } else {
//   console.log('Maloleten. Povikaj roditel.');
// }

// VEZBA 1 - POGOLEMO ILI POMALOs
// Tim 1: (15, 18, 21)
// Tim 2: (13, 28, 25)

// const prosek1 = (15 + 18 + 21) / 3;
// const prosek2 = (13 + 28 + 25) / 3;

// if (prosek1 > prosek2) {
//   console.log(`Pobednik e Tim 1`);
// } else if (prosek1 === prosek2) {
//   console.log(`Rezultat e izednacen`);
// } else {
//   console.log(`Pobednik e Tim 2`);
// }

// Falsy values
// if (0) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// if (false) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// if ('') {
//   console.log('True');
// } else {
//   console.log('False');
// }

// if (undefined) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// if (null) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// if (NaN) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// // Truthy values
// if (1) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// if ('a') {
//   console.log('True');
// } else {
//   console.log('False');
// }

// if (true) {
//   console.log('True');
// } else {
//   console.log('False');
// }

// DEN 2 ZAVRSUVA OVDE

// for (let i = 0; i <= 10; i++) {
//   console.log(`Printed ${i} times.`);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(`Printed ${i} times backwards.`);
// }

// let n = 0;
// while (n <= 10) {
//   console.log(`Printed ${n} times - while loop.`);

//   n++;
// }

// let m = 10;
// while (m >= 0) {
//   console.log(`Printed ${m} times backwards - while loop.`);

//   m--;
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 3) continue;
//   if (i === 7) break;

//   console.log(`Printed ${i} times.`);
// }

// Isprintaj gi broevite od 1-20;
// for (let i = 1; i < 21; i++) {
//   console.log(i);
// }

// Isprintaj gi neparnite broevi do 100
// for (let i = 1; i <= 100; i = i + 2) {
//   console.log(`Printed ${i} times`);
// }

// Da se isprinta tablicata za mnozenje so brojot 7
// 1 * 7 = 7
// 2 * 7 = 14
// 3 * 7 = 21
// 4 * 7 = 28
// 5 * 7 = 35
// 6 * 7 = 42
// 7 * 7 = 49
// 8 * 7 = 56
// 9 * 7 = 63
// 10 * 7 = 70

// console.log(`${1} * 7 = ${1 * 7}`);

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} * 7 = ${7 * i}`);
// }

// Da se isprintat tablicite za mnozenje od 1-10
// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 4
// 2 * 1 = 2
// 2 * 2 = 4

// console.log(`${1} * ${2} = ${1 * 2}`);

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Presmetaj go zbirot na broevite 1-10 1+2+3+4+5+6+7+8+9+10 = 55
// let suma = 0;

// for (let i = 1; i <= 10; i++) {
//   suma = suma + i;
// }

// console.log(suma);

// Presmetaj go zbirot na neparnite broevi pogolemi od 10 i pomali od 30 = 200
// let zbir = 0;

// for (let i = 11; i < 30; i = i + 2) {
//   zbir = zbir + i;
// }

// console.log(zbir);

// DEN 3 OVDE ZAVRSUVA
