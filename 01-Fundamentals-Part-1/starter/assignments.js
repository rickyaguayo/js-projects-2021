/*
let country = "USA";
let continent = "North America";
let population = "329.5 million";

console.log(country + ', ' + continent + ', ' + population);

let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof 'ricky');

jsIsFun = 'YES!'
console.log(typeof jsIsFun);

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(typeof year)

let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

// let markHeight = 1.88;
// let markWeight = 95;
// let johnHeight = 1.76;
// let johnWeight = 85;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's!");
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log("John's BMI is higher than Mark's!");
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

const firstName = 'Ricky';
const job = 'developer';
const birthYear = 1992;
const currentYear = 2037;

const ricky = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';

console.log(ricky);

const rickyNew = `I'm ${firstName} a ${currentYear - birthYear} year old ${job}!`;
console.log(rickyNew);

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;

// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage) {
//   console.log("Dolphins win!");
// } else if (dolphinsAverage < koalasAverage) {
//   console.log("Koalas win!");
// } else {
//   console.log("It's a tie!");
// }

// if (dolphinsAverage > 100 && koalasAverage > 100) {
//   if (dolphinsAverage > koalasAverage) {
//     console.log("Dolphins win!");
//   } else if (dolphinsAverage < koalasAverage) {
//     console.log("Koalas win!");
//   } else {
//     console.log("It's a tie!");
//   }
// } else if (dolphinsAverage < 100 && koalasAverage > 100) {
//   console.log("Koalas Win! 1");
// } else if (dolphinsAverage > 100 && koalasAverage < 100) {
//   console.log("Dolphins Win! 2");
// } else {
//   console.log("Min 100 points to win");
// }

const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;

console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win!");
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log("Koalas win!");
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("It's a tie!");
} else {
  console.log("no one wins");
}

*/

// MY WAY
// const bill = 430;
// let tip;

// bill >= 50 && bill <= 300 ? tip = bill * .15 : tip = bill * .2;
// const total = bill + tip;

// JONAS' WAY
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`)
