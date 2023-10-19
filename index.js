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

// DEN 3 ZAVRSUVA OVDE

// // Function Expression
// function hello(username = 'World') {
//   console.log(`Hello ${username}`);
// }

// hello('Dimitar');
// hello('Aleksandra');
// hello('Mihael');
// hello('Ivana');
// hello('Gorazd');
// hello();

// // Function Declaration
// const helloDeclaration = function (username = 'World') {
//   console.log(`Hello ${username} from function declaration.`);
// };

// helloDeclaration('Dimitar');
// helloDeclaration('Aleksandra');
// helloDeclaration('Mihael');
// helloDeclaration('Ivana');
// helloDeclaration('Gorazd');
// helloDeclaration();

// // Arrow Functions
// const helloArrow = (username = 'World') =>
//   console.log(`Hello ${username} from arrow function`);

// helloArrow('Dimitar');
// helloArrow();

// Function expression - returning values
// function calcArea(width = 1, height = 1) {
//   console.log('This will print');
//   return width * height;
// }

// const area = calcArea(5, 3);
// calcArea(5, 3);

// console.log(area);

// // Function declaration - returning values
// const calcAreaDeclaration = function (width = 1, height = 1) {
//   return width * height;
// };

// const areaDeclaration = calcAreaDeclaration(10, 2);
// console.log(areaDeclaration);

// // Arrow function - returning values
// // const calcAreaArrow = (width = 1, height = 1) => width * height;

// const calcAreaArrow = (width = 1, height = 1) => {
//   return width * height;
// };

// const areaArrow = calcAreaArrow(13, 3);
// console.log(areaArrow);

// No code is executed in a function after the return keyword

// function returnFunc() {
//   const name = 'Dimitar';
//   const lastName = 'Kalapocev';

//   return name + ' ' + lastName;

//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
// }

// const fullName = returnFunc();
// console.log(fullName);

// const returnFuncDeclaration = function () {
//   const name = 'Dimitar';
//   const lastName = 'Kalapocev';

//   return name + ' ' + lastName;

//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
// };

// const fullNameDeclaration = returnFuncDeclaration();
// console.log(fullNameDeclaration);

// const returnFuncArrow = () => {
//   const name = 'Dimitar';
//   const lastName = 'Kalapocev';

//   return name + ' ' + lastName;

//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
//   console.log('This will not be printed');
// };

// const fullNameArrow = returnFuncArrow();
// console.log(fullNameArrow);

// // The only way to use multiple returns is conditional rendering/programming
// const multipleReturns = (age) => {
//   if (age >= 18) {
//     return 'The user is legal';
//   } else {
//     return 'The user is not legal';
//   }
// };

// const isDimitarLegal = multipleReturns(20);
// const isLegal = multipleReturns(15);
// console.log(isDimitarLegal);
// console.log(isLegal);

// 1. Funkcija sto konvertira od stepeni celzjusovi vo stepeni farenhajt.
// Test data: 10, 17, 23
// const celsiusToFahrenheit = (celsius = 1) => (celsius * 9) / 5 + 32;

// const testResult1 = celsiusToFahrenheit(10);
// const testResult2 = celsiusToFahrenheit(17);
// const testResult3 = celsiusToFahrenheit(23);

// console.log(testResult1, testResult2, testResult3);

// 2. Funkcija sto presmetuva danok
// 100 -> 118

// cena * 0.18;
// const addTax = (price = 1) => {
//   const tax = 0.21;
//   priceWithTax = price * tax + price;
//   return priceWithTax;
// };

// const addTaxTo = addTax(100);
// const addTaxTo2 = addTax(185);
// const addTaxTo3 = addTax(250);
// console.log(addTaxTo, addTaxTo2, addTaxTo3);

// 3. Funkcija sto presmetuva baksis
// parameters: cena, baksis (procenti (10% -> 0.1, 25 -> 0.25))
// const addTips = (price = 100, tip = 0.1) => {
//   return price * tip + price;
// };

// const addTipTo = addTips(1000, 0.2);
// const addTipTo2 = addTips(1500, 0.5);
// console.log(addTipTo, addTipTo2);

// Funkcija sto presmetuva BMI (Body Mass Index);
// parameters: mass (kg), height (meters)
// 75, 185
// mass / height ** 2

// Mass in kg, height in m
// const bmiCalc = (mass, height) => {
//   return mass / height ** 2;
// };

// const myBMI = bmiCalc(75, 1.85);
// console.log(myBMI);

// DEN 4 ZAVRSUVA OVDE

// Creating and getting values from array
// const hotelsArray = new Array();
// const hotels = ['Emi', 'Sirius', 'Gligorov'];
// console.log(hotels);
// console.log(hotels[0]);
// console.log(hotels[1]);
// console.log(hotels[2]);

// const dimitar = ['Dimitar', 'Kalapocev', 20, 2003, 'JavaScript Instructor'];

// // Jas sum *Dimitar Kalapocev*. Imam *20* godini znaci sum roden vo *2003* i sum *JavaScript Instructor*.
// console.log(
//   `Jas sum ${dimitar[0]} ${dimitar[1]}. Imam ${dimitar[2]} godini znaci sum roden vo ${dimitar[3]} i sum ${dimitar[4]}`
// );

// function test() {}

// const dimitar = ['Dimitar', 'Kalapocev', 20, 2003, 'JavaScript Instructor'];
// console.log(dimitar);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof test);

// Adding and changing values in arrays
// const hotels = ['Emi', 'Sirius', 'Gligorov'];
// console.log(hotels);
// console.log(hotels[0]);

// hotels[0] = 'Vila Park';
// console.log(hotels);
// console.log(hotels.length);

// hotels[3] = 'Emi';
// console.log(hotels);
// console.log(hotels.length);

// hotels[hotels.length] = 'Ilinden';
// hotels[hotels.length] = 'Ilinden';
// hotels[hotels.length] = 'Ilinden';
// hotels[hotels.length] = 'Miss Stone';
// console.log(hotels);
// console.log(hotels[hotels.length - 1]);

// Printing array with for and while loops
// const hotels = [
//   'Emi',
//   'Sirius',
//   'Gligorov',
//   'Vila Park',
//   'Ilinden',
//   'Eterno',
//   'Miss Stone',
//   'Istatov',
//   'Sirius',
// ];
// console.log(hotels);
// // console.log(hotels.length);
// // console.log(hotels[0]);
// // console.log(hotels[1]);
// // console.log(hotels[2]);
// // console.log(hotels[3]);
// // console.log(hotels[4]);
// // console.log(hotels[5]);
// // console.log(hotels[6]);
// // console.log(hotels[7]);
// // console.log(hotels[8]);

// for (let i = 0; i < hotels.length; i++) {
//   console.log(`Koga bev vo Strumica prestojuvav vo hotel ${hotels[i]}`);
// }

// let n = 0;
// while (n < hotels.length) {
//   console.log(hotels[n]);

//   n++;
// }

// Adding and removing elements from array
// const hotels = ['Emi', 'Sirius', 'Gligorov'];
// console.log(hotels);

// // Adds new element to the beginning of the array
// hotels.unshift('Vila Park');
// console.log(hotels);

// // Deletes element from the beginning of the array
// hotels.shift();
// console.log(hotels);

// // Adds new element to the end of the array
// hotels.push('Ilinden', 'Eterno', 'Miss Stone');
// console.log(hotels);

// // Removes element from the end of the array
// hotels.pop();
// console.log(hotels);

// Merging arrays into one
// const hotels1 = ['Emi', 'Sirius', 'Gligorov'];
// const hotels2 = ['Vila Park', 'Ilinden', 'Eterno'];
// console.log(hotels1, hotels2);

// const allHotels = hotels2.concat(hotels1);
// console.log(allHotels, hotels1, hotels2);

// Return copy of array
// const hotels1 = ['Emi', 'Sirius', 'Gligorov', 'Vila Park', 'Ilinden', 'Eterno'];
// const hotelsCopy = hotels1.slice(1, -2); // 3 - 1 = 2
// console.log(hotels1);
// console.log(hotelsCopy);

// Return string from elements from array
// const word = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'];
// const fullWord = word.join('');
// console.log(fullWord);

// const sentence = ['JavaScript', 'is', 'the', 'best'];
// const fullSentence = sentence.join(' ');
// console.log(fullSentence);

// Reversing the elements of an array
// const numbers = [412, 521, 21, 521, 9, 24];
// numbers.reverse();
// console.log(numbers);

// const fruits = ['apple', 'orange', 'banana'];
// console.log(fruits);
// // 1. Da se dodade 'kiwi' na pocetokot od nizata
// // 2. Da se odstrane 'banana'
// // 3. Da se dodadat 'mango' i 'berries' na krajot od nizata

// fruits.unshift('kiwi');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.push('mango', 'berries');
// console.log(fruits);

// For loop sto gi presmtuva site broevi od nizata
// const numbers = [7, 13, 27, 4, 19];

// let suma = 0;

// for (let i = 0; i < numbers.length; i++) {
//   suma = suma + numbers[i];
//   // 0 + 7 = 7
//   // 7 + 13 = 20
//   // 20 + 27 = 47
//   // 47 + 4 = 51
//   // 51 + 19 = 70
// }

// console.log(suma);

// const numbers = [5, 3, 17, 57, 41, 29];
// 1. Da se sortira nizata od najgolem do najmal (koristi Google za metod)
// 2. Da se odzemat site broevi od nizata.
// dimikalapocev@gmail.com

// DEN 5 ZAVRSUVA OVDE

// const numbers = [24, 421, 51, 2, 4, 28, 1, 281, 231];

// // 24 421
// // 421 51 - 24 51 421
// // 24 51

// console.log(numbers.sort());

// console.log(numbers.sort((a, b) => b - a));

// const dimitar = ['Kalapocev', 20, 2003, 'Dimitar', 'JavaScript Instructor', {}];
// console.log(dimitar[0]);

// name    - key
// Dimitar - value

// const dimitar = {
//   lastName: 'Kalapocev',
//   birthYear: 2003,
//   jobs: ['JavaScript Instructor', 'Developer'],
//   name: 'Dimitar',
// };
// console.log(dimitar);

// console.log(dimitar.name);
// console.log(dimitar.lastName);
// console.log(dimitar.jobs);
// console.log(dimitar.birthYear);
// // // Jas sum *Dimitar Kalapocev*. Roden sum vo *2003* i sum *JavaScript Instructor*.
// console.log(
//   `Jas sum ${dimitar.name} ${dimitar['lastName']}. Roden sum vo ${dimitar.birthYear} i sum ${dimitar.jobs[0]} & ${dimitar.jobs[1]}.`
// );

// const dimitar = {
//   lastName: 'Kalapocev',
//   birthYear: 2003,
//   jobs: ['JavaScript Instructor', 'Developer'],
//   name: 'Dimitar',

//   calcAge() {
//     return 2023 - this.birthYear;
//   },
// };

// console.log(dimitar.calcAge());

// dimitar.lastName = 'Gorgiev';
// console.log(dimitar);

// dimitar.fullName = 'Dimitar Kalapocev';
// console.log(dimitar);

// Object Oriented Programming OOP
// const Account = function (name, lastName, username, password, birthYear) {
//   this.name = name;
//   this.lastName = lastName;
//   this.username = username;
//   this.password = password;
//   this.birthYear = birthYear;

//   this.calcAge = function () {
//     this.age = 2023 - this.birthYear;
//   };
//   this.calcAge();
// };

// // Add properties to constructor function from the outside
// Account.prototype.jobs = this.jobs;

// // Add method to constructor function from the outside
// Account.prototype.fullNameFunc = function () {
//   this.fullName = `${this.name} ${this.lastName}`;
//   return `Full name generated`;
// };

// const dimitarAcc = new Account(
//   'Dimitar',
//   'Kalapocev',
//   'dimik',
//   'password',
//   2003
// );

// dimitarAcc.jobs = ['JavaScript Instructor', 'Developer'];

// console.log(dimitarAcc);
// console.log(dimitarAcc.age);
// console.log(dimitarAcc.fullNameFunc());

// const irena = new Account(
//   'Irena',
//   'Pavlova',
//   'irepav23',
//   'irenapavlova123',
//   1993
// );

// console.log(irena);
// console.log(irena.fullNameFunc());
// irena.jobs = ['JavaScript Developer'];

// 1. Napravi constructor function sto gi zema slednite parametri: name, lastName, birthYear, hobbies
// 2. Vo constructor funkcijata napravi metod sto gi presmetuva godinite, i gi zapisuva go objektot kako age
// 3. Dodadi 'profession' nadvor od constructor funkcijata
// 4. Dodadi metod greet() nadvor od constructor funkcijata, sto printa vo konzolata: 'Hello from ${name}. I am ${age} years old and I am a ${profession}
// 5. Napravi for loop sto printa recenica za sekoe hobi: 'Dimitar likes to Play Chess' - primer.
