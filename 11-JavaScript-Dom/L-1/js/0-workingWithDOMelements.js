console.log("Hello World");

// checking how many images in a page
var images = document.getElementsByTagName('img');
console.log(images);

// checking how many anchor tags in a page
var anchor = document.getElementsByTagName('a');
console.log(anchor)

// checking p tags
var phrase = document.getElementsByTagName('p')
console.log(phrase)

// get element by id 
// in this case i havent used id in my html code
// var heading = document.getElementById('heading')
// console.log(heading);
// console.log(heading.innerHTML);
// console.log(heading.nodeType);

var heading = document.getElementsByClassName('content')
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.nodeType);