'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/

//grab the cat and set left and width to it
const walkingCat = document.querySelector('img');
let left = 0;
const width = 300;
walkingCat.style.left = left + 'px';
walkingCat.style.width = width + 'px';

function catWalk() {
  //call an inner  function with setInterval
  let walk = setInterval(walkBreakPoints, 50);
  // make another function to set all the walking breakpoints
  function walkBreakPoints() {
    const windowWidth = parseInt(window.innerWidth);
    const halfOfTheScreen = parseInt(windowWidth / 2);
    //stop at the middle for 5 seconds
    if (left + width === halfOfTheScreen) {
      walkingCat.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      clearInterval(walk);

      window.setTimeout(() => {
        left += 10;
        walkingCat.src =
          'http://www.anniemation.com/clip_art/images/cat-walk.gif';
        walk = setInterval(walkBreakPoints, 50);
      }, 5000);
      //reset the left at the end
    } else if (left === windowWidth) {
      left = 0;

      //normal situation
    } else {
      left += 10;
      walkingCat.style.left = left + 'px';
    }
  }
}

// TODO execute `catWalk` when the browser has completed loading the page
catWalk();
