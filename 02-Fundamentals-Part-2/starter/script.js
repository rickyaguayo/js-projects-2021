'use strict';

/*
function logger() {
  console.log('my name is ricky');
}

logger(); //calling/running/invoking function

// FUNCTION DECLARATIONS
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1992);
console.log(age1);

// FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2040 - birthYear;
}
const age2 = calcAge2(1992);

console.log(age1, age2);

// ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`
}

const yearsLeft = yearsUntilRetirement(1992, 'Ricky');
console.log(yearsLeft);

// FUNCTION WITHIN A FUNCTION
function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const appleSlices = cutFruit(apples);
  const orangeSlices = cutFruit(oranges);

  const juice = `Juice with ${appleSlices} apple slices and ${orangeSlices} orange slices.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1992, 'Ricky'));
console.log(yearsUntilRetirement(1960, 'Mother'));

// ARRAYS
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // replaces friends[2] (Peter) with Jay
console.log(friends);

const firstName = 'Ricky';

const ricky = [firstName, 'Aguayo', 2021 - 1992, 'developer', friends]
console.log(ricky);
console.log(ricky.length);

const calcAge2 = function (birthYear) {
  return 2040 - birthYear;
}

const years = [1991, 1992, 1996, 2010];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

// ADDS ELEMENTS
friends.push('Jay'); // adds to end of array
friends.unshift('John'); // adds to beginning of array

// REMOVES ELEMENTS
friends.pop(); // removes last element
friends.shift(); // removes first element

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven')); // useful in functions
if (friends.includes('Peter')) console.log('Peter is here');

console.log(friends);

// OBJECTS

const ricky = {
  firstName: 'Ricky',
  lastName: 'Aguayo',
  age: 2037 - 1992,
  job: 'developer',
  friends: ['Michael', 'Peter', 'Steven']
};

console.log(ricky.lastName); // dot notation
console.log(ricky['lastName']); // bracket notation

const nameKey = 'Name';
console.log(ricky['first' + nameKey]);
console.log(ricky['last' + nameKey]);

// const interestedIn = prompt('What do you want to know? firstName, lastName, age, job, friends?')

// if (ricky[interestedIn]) {
//   console.log(ricky[interestedIn]);
// } else {
//   console.log('Wrong request! What do you want to know? firstName, lastName, age, job, friends?')
// }

// adding to object
ricky.location = 'Dallas';
ricky['instagram'] = '@p1ckle_r1cky';

console.log(`${ricky.firstName} has ${ricky.friends.length} friends, and his best friend is called ${ricky.friends[0]}.`);

const ricky = {
  firstName: 'Ricky',
  lastName: 'Aguayo',
  birthYear: 1992,
  job: 'developer',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // MY WAY
  // getSummary: function () {
  //   if (this.hasDriversLicense) {
  //     console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has a driver's license`)
  //   } else {
  //     console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has no driver's license`)
  //   }
  // }

  // JONAS WAY
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  }
};

// console.log(ricky.calcAge())
console.log(ricky.getSummary());
// console.log(ricky['calcAge'](1992));

// the function in the object is the same as this
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// } 

// FOR LOOPS

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lift weights. Rep ${rep}`);
// }

const ricky = [
  'Ricky',
  'Aguayo',
  2037 - 1992,
  'developer',
  ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < ricky.length; i++) {
  // reading from ricky array
  console.log(ricky[i], typeof ricky[i]);

  // filling an array
  // types[i] = typeof ricky[i];
  types.push(typeof ricky[i]);
}

console.log(types);

const years = [1992, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

for (let i = 0; i < ricky.length; i++) {
  if (typeof ricky[i] !== 'string') continue;

  console.log(ricky[i], typeof ricky[i]);
};

for (let i = 0; i < ricky.length; i++) {
  if (typeof ricky[i] === 'number') break;

  console.log(ricky[i], typeof ricky[i]);
};

const ricky = [
  'Ricky',
  'Aguayo',
  2037 - 1992,
  'developer',
  ['Michael', 'Peter', 'Steven']
];

for (let i = ricky.length - 1; i >= 0; i--) {
  console.log(ricky[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--starting exercise ${exercise}--`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifting weights rep ${rep}`);
  }
}

// WHILE LOOPS

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lift weights. Rep ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lift weights. Rep ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1
// can also be written as Math.ceil(Math.random() * 6)
// console.log(dice)

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1

  if (dice === 6) {
    console.log('You rolled a 6!')
  }
}

*/