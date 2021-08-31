'use strict';
/*------------------------------------------------------------------------------
- Run the unmodified program and confirm that problem described occurs.
- Refactor the `rollDice()` function from callback-based to returning a
  promise.
- Change the calls to `callback()` to calls to `resolve()` and `reject()`.
- Refactor the code that call `rollDice()` to use the promise it returns.
- Does the problem described above still occur? If not, what would be your
  explanation? Add your answer as a comment to be bottom of the file.
------------------------------------------------------------------------------*/

// TODO Remove callback and return a promise

const rollDice = () => {
  return new Promise((resolve, reject) => {
    // Compute a random number of rolls (3-10) that the dice MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);
    const rollOnce = (roll) => {
      // Compute a random dice value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Dice value is now: ${value}`);

      // Use callback to notify that the dice rolled off the table after 6 rolls
      if (roll > 6) {
        // TODO replace "error" callback
        reject(new Error('Oops... Dice rolled off the table.'));
        return;
      }

      // Use callback to communicate the final dice value once finished rolling
      if (roll === randomRollsToDo) {
        // TODO replace "success" callback
        resolve(`Success! Dice settled on ${value}.`);
      }

      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(
          () => {
            rollOnce(roll + 1);
          },

          500
        );
      }
    };

    // Start the initial roll
    rollOnce(1);
  });
};

//TODO Refactor to use promise
rollDice()
  .then((success) => console.log(success))
  .catch((err) => console.log(err));

/*
#### Explain the problem: 
The problem doesn't occur with the promise function .
In the callback function , we got an error message when the condition (roll > 6 ) is met but the setTimeout() function 
doesn't stop. and it continue executing until its condition evaluate to false (roll < randomRollsToDo).
so the last call of rollDice() is when (roll === randomRollsToDo) which is also the condition of the success callback function.
therefore we got a success message after an error message when the randomRollsToDo's is more than 6.
##### how to fix it ?
we have to stop  calling rollDice() after we got an error message by adding the  <<<return>>> keyword
after executing the callback function with an error, like this:
if (roll > 6) {
    callback(new Error('Oops... Dice rolled off the table.'));
      return;
    }
##### Why we don't get this problem with the Promise function ?
The executor should call only one resolve or one reject. Any state change is final.
all further calls of resolve and reject are ignored.
In rollDice function, if the  randomRollsToDo's value is more than 6 , it would call reject
 when this condition is met(roll > 6) and it would ignore anything further calls.
 */
// ! Do not change or remove the code below
module.exports = rollDice;
