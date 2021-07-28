'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const today = new Date();
  const time = today.toLocaleTimeString();
  const timeNow = document.createElement('div');
  timeNow.textContent = time;

  document.body.appendChild(timeNow);
}
const currentTime = setInterval(addCurrentTime, 1000);

// TODO execute `addCurrentTime` when the browser has completed loading the page

window.addEventListener('load', currentTime);
