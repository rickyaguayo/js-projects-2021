'use strict';

/*

// CODING CHALLENGE #1
const calcAvg = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const koalaAvg = calcAvg(23, 34, 27);
const dolphinAvg = calcAvg(65, 54, 49);

console.log(koalaAvg, dolphinAvg);

//MY WAY
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas && avgDolphins >= (avgKoalas * 2)) {
    return `Dolphins win (${avgDolphins}, ${avgKoalas})!`;
  } else if (avgKoalas > avgDolphins && avgKoalas >= (avgDolphins * 2)) {
    return `Koalas win (${avgKoalas}, ${avgDolphins})!`;
  } else {
    return 'No one wins'
  }
}

console.log(checkWinner(dolphinAvg, koalaAvg));

// JONAS WAY
const checkWinnerJ = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= (avgKoalas * 2)) {
    console.log(`Dolphins win (${avgDolphins}, ${avgKoalas})!`);
  } else if (avgKoalas >= (avgDolphins * 2)) {
    console.log(`Koalas win (${avgKoalas}, ${avgDolphins})!`);
  } else {
    console.log('No one wins');
  }
}

checkWinnerJ(dolphinAvg, koalaAvg);

// CODING CHALLENG #2

const bills = [125, 555, 44];

// MY WAY
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * .15;
  } else {
    return bill * .2;
  }
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// console.log(tips);

const totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[bills.length - 1] + calcTip(bills[bills.length - 1])]
console.log(totals);

// JONAS WAY
const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const totals1 = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals1)

// const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

*/

// CODING CHALLENGE #3

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}

if (mark.calcBMI() > john.calcBMI()) {
  console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()})`)
} else {
  console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()})`)
}
