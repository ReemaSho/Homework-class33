'use strict';
/*------------------------------------------------------------------------------
You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beers: 5,
  chips: 1.75,
  popcorn: 0.99,
  peanuts: 1.99,
  cupcake: 2.99,
};

function calculateTotalPrice(items) {
  let total = 0;

  Object.values(items).forEach((item) => {
    total += item;
  });

  return total;
}
console.log(calculateTotalPrice(cartForParty));

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  const initialCart = {
    beers: 1,
    chips: 1,
    popcorn: 1,
    peanuts: 1,
    cupcake: 1,
  };
  const result = calculateTotalPrice(initialCart);
  console.assert(result === 5);
}

function test() {
  test1();
  test2();
}

test();
