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

*/