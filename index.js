// ------------------ DEN 1 --------------------------

// alert('Hello World');

// const prvoIme = prompt('What"s your name');
// alert(prvoIme);

// console.log(prvoIme);

// if (confirm('Dali ste preku 18?')) {
//   console.log('Vie ste preku 18');
// } else {
//   console.log('Vie nemate 18!');
// }

// const firstName = 'Dimitar';
// let lastName = 'Kalapocev';

// lastName = 'Kalapoceva';

// console.log(firstName, lastName);

// const string = `What's your name`;
// const number = 23.12;
// const boolean = true;
// let undef;
// let undef2 = null;

// console.log(string, number, boolean, undef, undef2);
// console.log(typeof undef2);

// ------------------ DEN 2 --------------------------

// let x = 10 + 20; // 30
// let godini = (2023 - 2003) * 2;

// console.log(x);
// console.log(godini);

// let x = 10;
// let y = 20;

// console.log(x, y);

// x += y; // x = x + y

// console.log(x);

// x -= y; // x = x - y;

// console.log(x);

// let nad18 = 18 >= 18;
// let pod18 = 18 < 18;

// console.log(nad18, pod18);

// let ednakvi = 18 === '18';
// let neEdnakvi = 18 !== 20;

// let ednakvi2 = 18 == '18'; // NE E PREPORACLIVO
// let neEdnakvi2 = 18 != '18'; // NE E PREPORACLIVO

// console.log(ednakvi, neEdnakvi);

// console.log(ednakvi2, ednakvi);

// let ime = `Dimitar`;
// let pozdrav = `Zdravo, moeto ime e ` + ime + `.`;

// console.log(pozdrav);

// let firstName = `Dimitar`;
// let lastName = `Kalapocev`;
// let age = 19;

// My name is firstName. My last name is lastName. I am age years old.

// console.log(
//   `My name is ` +
//     firstName +
//     `. My last name is ` +
//     lastName +
//     `. I am ` +
//     age +
//     ` years old.`
// );

// if (5 > 2) {
//   console.log(`5 e pogolem od 2`);
// } else {
//   console.log(`5 ne e pogolem od 2`);
// }

// if (age >= 18) {
//   console.log(`Ti si polnoleten`);
// } else {
//   console.log(`Ti si maloleten`);
// }

// let age = 18;

// if (age > 18) {
//   console.log(`Ti si polnoleten`);
// } else if (age === 18) {
//   console.log(`Ti si polnoleten`);
// } else {
//   console.log(`Ti si maloleten`);
// }

// TIM 1: 15, 18, 21
// TIM 2: 13, 28, 25

// let avgTeam1 = (15 + 18 + 21) / 3;
// let avgTeam2 = (13 + 28 + 25) / 3;

// if (avgTeam1 > avgTeam2) {
//   console.log(`Tim 1 e pobednik`);
// } else if (avgTeam1 === avgTeam2) {
//   console.log(`Rezultatot e ednakov`);
// } else {
//   console.log(`Tim 2 e pobednik`);
// }

// const x = 30;
// const y = 20;

// const z = x > y ? `Uslovot ni e tocen` : `Uslovot ne e tocen`;

// console.log(z);

// let age = 15;

// if (age >= 18) {
//   console.log(`Vie ste polnoleten`);
// } else {
//   console.log(`Vie ste maloleten`);
// }

// let message = age >= 18 ? `Vie ste polnoleten` : `Vie ste maloleten`;

// console.log(message);

// ------------------ DEN 3 --------------------------

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let n = 12;

// while (n <= 10) {
//   console.log(n);

//   n++;
// }

// let x = 15;

// do {
//   console.log(x);

//   x++;
// } while (x <= 10);

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// let n = 10;

// while (n >= 0) {
//   console.log(n);

//   n--;
// }

// let m = 0;

// while (m <= 20) {
//   console.log(m);

//   m += 2;
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) continue;

//   console.log(i);
// }

// for (let i = 11; i <= 20; i++) {
//   if (i === 15) break;

//   console.log(i);
// }

// ISPRINTAJ GI BROEVITE OD 1 DO 10 (FOR I WHILE)

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let n = 1;

// while (n <= 10) {
//   console.log(n);

//   n++;
// }

// ISPRINTAJ GI NEPARNITE BROEVI DO 100 (FOR I WHILE)

// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

// let n = 1;

// while (n <= 100) {
//   console.log(n);

//   n += 2;
// }

// ISPRINTAJ JA TABLICATA MNOZENJE SO 7 (FOR I WHILE)

// 1 * 7 = 7
// 2 * 7 = 14
// 3 * 7 = 21
// ...
// 10 * 7 = 70

// for (let i = 1; i <= 10; i++) {
//   console.log(i + ` * 7 = ` + i * 7);
// }

// let n = 1;

// while (n <= 10) {
//   console.log(n + ` * 7 = ` + n * 7);

//   n++;
// }

// ISPRINTAJ GI TABLICITE ZA MNOZENJE SO SITE BROEVI OD 1 DO 10 (FOR I WHILE)

// 1 * 1 = 1
// 2 * 1 = 2
// 3 * 1 = 3
// 10 * 1 = 10

// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// 10 * 2 = 20

// 1 * 3 = 3
// 2 * 3 = 6
// 3 * 3 = 9
// 10 * 3 = 30

// 1 * 10 = 10
// 2 * 10 = 20
// 3 * 10 = 30
// 10 * 10 = 100

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + ` * ` + j + ` = ` + i * j);
//   }
// }

// let n = 1;

// while (n <= 10) {
//   let m = 1;

//   while (m <= 10) {
//     console.log(n + ` * ` + m + ` = ` + n * m);

//     m++;
//   }

//   n++;
// }

// PRESMETAJ GO ZBIROT NA BROEVITE OD 1 DO 10 (FOR I WHILE)
// SUMA = 55

// let suma = 0;

// for (let i = 1; i <= 10; i++) {
//   suma += i;
// }

// console.log(suma);

// let suma2 = 0;
// let n = 1;

// while (n <= 10) {
//   suma2 += n;
//   n++;
// }

// console.log(suma2);

// -------------------------------------- DEN 4 ---------------------------------

// function hello() {
//   console.log('Hello');
// }

// hello();

// const hello2 = function () {
//   console.log('Hello 2');
// };

// hello2();

// const hello3 = () => {
//   console.log('Hello 3');
// };

// hello3();

// let number1 = Number(prompt(`Vnesete sirina`));
// let number2 = Number(prompt(`Vnesete visina`));

// const calcArea = (width = 1, height = 1) => {
//   let areaFunction = width * height;
//   return areaFunction;
// };

// let area = calcArea(number1, number2);
// console.log(area);

// n * 1.8 + 32

// function toFarenheit(cels) {
//   return cels * 1.8 + 32;
// }

// const toFarenheit2 = function (cels) {
//   return cels * 1.8 + 32;
// };

// const toFarenheit3 = (cels) => {
//   return cels * 1.8 + 32;
// };

// const toFarenheit3 = (cels) => cels * 1.8 + 32;

// let res1 = toFarenheit(30);
// let res2 = toFarenheit2(35);
// let res3 = toFarenheit3(40);
// console.log(res1, res2, res3);

// let hotel1 = hotels[0];
// let hotel2 = hotels[4];

// hotels[3] = 'Ilinden';

// console.log(hotel1);
// console.log(hotel2);

// console.log(hotels);
// console.log(hotels.length);

// // hotels[3] = 'Ilinden';
// console.log(hotels);

// hotels.push('Ilinden', 'fafwa');
// hotels.pop();

// hotels.unshift('Ilinden');
// hotels.shift();

// console.log(hotels);

// const hotels = ['Emi', 'Sirius', 'Gligorov'];

// hotels.push('Ilinden');
// hotels.push('fabhdka');
// hotels.push('daivadab');

// console.log(hotels[0]);
// console.log(hotels[1]);
// console.log(hotels[2]);
// console.log(hotels[3]);

// // console.log(hotels.length);

// for (let i = 0; i < hotels.length; i++) {
//   console.log(hotels[i]);
// }

// const arr = ['Dimitar', 'Kalapocev', 19, true, undefined, []];

// console.log(arr);

// let suma = 0;

// for (let i = 1; i <= 10; i++) {
//   suma += i;
// }

// console.log(suma);

// const numbers = [12, 32, 5, 76, 12, 68, 22];
// let suma = 0;

// for (let i = 0; i < numbers.length; i++) {
//   suma += numbers[i];
// }

// console.log(suma);

// FUNKCIJA STO KE PRIMA NIZA KAKO PARAMETAR I KE GI SOBIRA BROEVITE VNATRE VO NIZATA

// const numbers = [5, 2, 7, 4];

// const calcArray = (arr) => {
//   let suma = 0;

//   for (let i = 0; i < arr.length; i++) {
//     suma += arr[i];
//   }

//   return suma;
// };

// const result = calcArray(numbers);

// console.log(result);
