'use strict';
/*------------------------------------------------------------------------------
1. Complete the function `rollTheDices()` by using `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  const rolledDices = [];

  dices.forEach((dice) => rolledDices.push(rollDice(dice)));
  return Promise.race(rolledDices);
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const results = await rollTheDices();
    console.log('Resolved!', results);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

main();
/* because we have in the <<pokerDiceRoller>> function a
 setTimeout function which push the functions to the webAPI and then to the callback queue. So the functions 
continue executing but their results are ignored.*/

// ! Do not change or remove the code below
module.exports = rollTheDices;
