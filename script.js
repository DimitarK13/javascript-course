// alert('Hello World');
// alert(firstName);

// const firstName = prompt("What's your name");

// if (confirm('Do you know JavaScript')) {
//   console.log('Hope you enjoy it ' + firstName);
// } else {
//   console.log('Welcome to JavaScript ' + firstName);
// }

// const firstName = 'Dimitar';
// const number = 24;
// const booleanTrue = true;
// const booleanFalse = false;
// let undef;
// let undef2 = null;

// undef = 'new value';

// firstName = 'Dance';

// console.log(typeof undef2);

// let firstName = 'Dimitar';
// let lastName = 'Kalapocev';
// let age = 2023 - 2003;
// age += 10;
// age *= 3;
// age /= 2;
// age **= 2;
// age++;
// age--;

// console.log(
//   'I am ' +
//     firstName +
//     '. My last name is ' +
//     lastName +
//     '. I am ' +
//     age +
//     ' years old'
// );

// I am Dimitar. My last name is Kalapocev. I am 20 years old.

// let isLegal = 18 >= 18;

// let isUnder18 = 19 <= 18;

// let is18 = 18 === '18';
// let not18 = 18 !== '18';

// console.log(not18);

// let x = 10;
// let y = 5;

// if (x > y) {
//   console.log('X is bigger than Y');
// } else {
//   console.log('X is not bigger than Y');
// }

// const myAge = 18;

// if (myAge > 18) {
//   console.log('Ti si polnoleten');
// } else if (myAge === 18) {
//   console.log('Ti si 18');
// } else {
//   console.log('Ti si maloleten');
// }

// TEAM 1 : (15, 28, 21);
// TEAM 2 : (13, 28, 25);

// TEAM 1 : (8, 33, 16);
// TEAM 2 : (12, 28, 17);

// TEAM 1 : (13, 22, 31);
// TEAM 2 : (12, 29, 20);

// let team1Avg = (13 + 22 + 31) / 3;
// let team2Avg = (12 + 29 + 20) / 3;

// if (team1Avg > team2Avg) {
//   console.log('Team 1 Wins');
// } else if (team1Avg === team2Avg) {
//   console.log('Draw');
// } else {
//   console.log('Team 2 Wins');
// }

// let x = 15;
// let y = 17;
// let z = 16;

// if (!'') {
//   console.log('True');
// } else {
//   console.log('false');
// }

// 0, '', undefined, null, false;

// let c;

// if (x > y) {
//   c = x;
// } else {
//   c = y;
// }

// console.log(c);

// let x = 5;
// let y = 7;
// let z = x > y ? x : y;

// console.log(z);

// let myAge = 19;
// let h;

// if (myAge >= 18) {
//   h = 'You can drive';
// } else {
//   h = "You can't drive";
// }

// let msg = myAge >= 18 ? 'You can drive' : "You can't drive";

// console.log(h);
// console.log(msg);

// function hello() {
//   console.log('Hello');
// }

// const hello2 = function () {
//   console.log('Hello 2');
// };

// hello();
// hello2();

// const calcArea = function (width, height) {
//   return width * height;
// };

// let area = calcArea(4, 3);
// let area2 = calcArea(5, 4);

// console.log(area);

// mass / height(2) BMI CALCULATOR

// let myBmi = bmiCalculator(74, 1.85);
// let aleksandarsBmi = bmiCalculator(71, 1.81);
// let randomBmi = bmiCalculator(120, 2.24);

// console.log(myBmi, aleksandarsBmi, randomBmi);

// function bmiCalculator(mass, height) {
//   return mass / height ** 2;
// }

// const bmiCalculatorArrow = (mass, height) => {
//   return mass / height ** 2;
// };

// fruits[3] = 'Banana';

// console.log(fruits);

// console.log(fruits[3]);

// const info = ['Dimitar', 'Kalapocev', 19, 'Instructor'];

// let msg =
//   'I am ' +
//   info[0] +
//   ' ' +
//   info[1] +
//   '. I am ' +
//   info[2] +
//   ' years old. I am an ' +
//   info[3] +
//   '.';

// console.log(msg);

// fruits.push('Banana', 'Kiwi');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift('Banana');
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// const fruits = ['Apple', 'Orange', 'Citrus'];
// console.log(fruits);

// const newArr = fruits.slice(); // 6 - 2 = 4
// console.log(newArr);

// const hotel = hotels.slice(-1);
// console.log(hotel);

// const hotels = ['Sirius', 'Emi', 'Ilinden', 'Vila Park'];
// console.log(hotels);
// const hotelsSkopje = ['Park', 'Arka', 'DoubleTree'];
// console.log(hotelsSkopje);

// const allHotels = hotels.concat(hotelsSkopje);
// console.log(allHotels);

// const names = ['Dimitar', 'Kalapocev', 19];
// const schools = ['Sando Masev', 'Nikola Karev'];

// const combined = names.concat(schools);
// console.log(combined);

// let msg =
//   'My name is ' +
//   combined[0] +
//   ' ' +
//   combined[1] +
//   ', I am ' +
//   combined[2] +
//   'years old. I finished elementary school in ' +
//   combined[3] +
//   ', and highschool in ' +
//   combined[4] +
//   '.';

// console.log();

// My name is Dimitar Kalapocev, I am 19 years old. I finished elementary school in Sando Masev, and highschool in Nikola Karev.

// const names = ['Dimitar', 'Kalapocev', 19];
// const schools = ['Nikola Karev', 'Sando Masev'];

// const combined = names.concat(schools);
// console.log(combined);

// const fruits = ['Apple', 'Orange', 'Citrus', 'Kiwi'];

// if (fruits.includes('Kiwi', 'Apple')) {
//   console.log('We have Kiwi available');
// } else {
//   console.log('Sorry, no Kiwi at the moment');
// }

// function doesInclude(fruit) {
//   return fruits.includes(fruit);
// }

// console.log(doesInclude('Kiwi'));
// console.log(doesInclude('Banana'));

// const pricesWithTax = prices.map((price) => price + price * 0.18);

// console.log(pricesWithTax);

// console.log(prices);

// const reversedPrices = prices.reverse();
// console.log(reversedPrices);

// const obj = {};

// console.log(Array.isArray(prices), typeof obj);

// const prices = [100, 25, 632, 562, 421, 223];

// const sortedPrices = prices.sort((a, b) => a - b);

// console.log(prices);
// console.log(sortedPrices);

// const arr = [25, 1025, 2560, 53, 12, 65, 23, 75];
// arr.sort((a, b) => a - b);

// console.log(arr);

// const halfArr = arr.map((element) => {
//   return element / 2;
// });

// console.log(halfArr);

// console.log(halfArr[halfArr.length - 1]);
