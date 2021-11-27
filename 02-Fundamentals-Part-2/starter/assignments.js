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

*/