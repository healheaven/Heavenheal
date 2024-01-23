var image = document.querySelector('img'); 
 image.onclick= function(){ 
  var myimage= image.getAttribute('src');
  if(myimage === 'photos/hi.png') {
   image.setAttribute('src','photos/hello.jpg');

} else {

    image.setAttribute ('src','photos/hi.png');
  } 
} 

var namebutton = document.querySelector('button');
var myheading = document.querySelector('marquee');

function setUserName() {
    'use strict';
    var myname = window.prompt('Please enter your name');
    localStorage.setItem('name', myname);
    myheading.textContent = 'Hi welcome, Have a nice day. ' + myname;

} 
if (!localStorage.getItem('name')) {
    setUserName();
}else {
    var storedname = localStorage.getItem('name');
    myheading.textContent = 'Hi welcome, Have a nice nice day' + storedname;

} 
namebutton.onclick = function() {
    'use strict'; 
    setUserName();

} 
var image = document.querySelector('img'); 
 image.onclick= function(){ 
  var myimage= image.getAttribute('src');
  if(myimage === 'photos/hi.png') {
   image.setAttribute('src','photos/hello.jpg');

} else {

    image.setAttribute ('src','photos/hi.png');
  } 
} 
 
