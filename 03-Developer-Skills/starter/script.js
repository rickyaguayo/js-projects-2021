// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// PROBLEM 1
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 2], [5, 2, 7]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees Celcius:')),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

*/

// CODING CHALLENGE 1

// loop through array
// the day comes from the position + 1 in the array
// create the string (template literal)
// log to console

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let forecast = '... ';

  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}\u00B0C in ${i + 1} days ... `;
  }
  return forecast;
};

const solution = printForecast(arr2);
console.log(solution);
