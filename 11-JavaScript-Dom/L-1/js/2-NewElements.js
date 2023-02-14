
// adding elements from javascript
var main_content = document.getElementById('main_content');


var new_heading = document.createElement('h2');
var new_phrase = document.createElement('p');

new_heading.innerHTML = "Welcome to Bikash Poudel";
new_phrase.innerHTML = "Simple demo that contents are coming from JavaScript!";

main_content.appendChild(new_heading);
main_content.appendChild(new_phrase);