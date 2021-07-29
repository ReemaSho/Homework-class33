'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

document.body.style.fontFamily = 'Arial, sans-serif';

document.getElementById('nickname').textContent = 'Mera';
document.getElementById('fav-food').textContent = 'Pasta';
document.getElementById('hometown').textContent = 'Syria';
const information = document.querySelectorAll('li');
information;
for (let i = 0; i < information.length; i++) {
  information[i].classList.add('list-item');
}
