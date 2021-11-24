/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = "Ricky"

let age = 29;
age = 30;

const birthYear = 1991;
birthYear = 1990; 

// math operators
const now = 2037;
const ageRicky = now - 1992;
const ageMonica = now - 1991;

console.log(ageRicky, ageMonica);
console.log(ageRicky * 2, ageRicky / 10, 2 ** 3);

const firstName = 'Ricky';
const lastName = 'Aguayo';

console.log(firstName + ' ' + lastName);

//assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
x++;
console.log(x);

// comparison operators- used to create boolean values
console.log(ageRicky < ageMonica) // <, >, <=, >=
console.log(ageMonica >= 18)

const averageAge = (ageMonica + ageRicky) / 2;
console.log(averageAge);

const age = 24;
// const oldEnough = age >= 16;

if (age >= 16) {
  console.log('Old enough to drive');
} else {
  const yearsLeft = 16 - age;
  console.log(`Still have ${yearsLeft} year(s) before you can drive`);
}

// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Ricky"));
console.log(typeof Number("Ricky"));

// type coercion
console.log("I'm " + 29 + " years old");

const money = 0;
if (money) {
  console.log("Nice!");
} else {
  console.log("Job?");
}

let height = 123;
console.log(height);

if (height) {
  console.log("Height defined");
} else {
  console.log("Height undefined");
}

const age = 19;
if (age === 18) console.log("you are 18");
//if the if statement is just one line, you can omit the curly braces

const favNum = Number(prompt("whats your favorite number"));
console.log(favNum); //typeof is string

if (favNum === 11) {
  console.log("Great number!");
} else if (favNum === 2) {
  console.log("another great number");
} else {
  console.log("pick better numbers");
}

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive.");
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive.");
}

const day = 'sunday';

// switch (day) {
//   case 'monday': //day === 'monday'
//     console.log('Get ready for work');
//     console.log('Go to work');
//     break;
//   case 'tuesday':
//     console.log('get tacos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('almost the weekend');
//     break;
//   case 'friday':
//     console.log('its the weekend');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('enjoy the weekend');
//     break;
//   default:
//     console.log('not a valid day');
// }

if (day === 'monday') {
  console.log('Get ready for work');
  console.log('Go to work');
} else if (day === 'tuesday') {
  console.log('get tacos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('almost the weekend');
} else if (day === 'friday') {
  console.log('its the weekend');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('enjoy the weekend');
} else {
  console.log('not a valid day')
}

const age = 29;

// age >= 30 ? console.log('you old') : console.log('not old yet');

const areYouOld = age >= 30 ? 'you old' : 'not old yet';
console.log(areYouOld);

*/