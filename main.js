console.log('läuft');

//HTML COLLETION & NODE LIST

// HTML = DYNAMISCH
// NODELIST = STATISCH

let liHTMLCollection = document.getElementsByTagName('li');
let liNodeList = document.querySelectorAll('li');

console.log('%cstart 1', "color:tomato");
console.log(liHTMLCollection);
console.log(liNodeList);
console.log('%cend 1', "color:tomato");

// console.log(document.body.children);
console.log(document.body.children[0]);
console.log(document.body.children[0].innerHTML += "<li>Item 3</li>");

console.log(document.body.children[0].children[1].style.color = "red")

console.log('%cstart 2', "color:tomato");
console.log(liHTMLCollection);
console.log(liNodeList);
console.log('%cend 2', "color:tomato");

// child notes 
// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

//================

//create Element 
// let div = document.createElement('div')
// div.textContent = "Test DIV";

// //appendChild 
// document.body.appendChild(div)

let newLi = document.createElement('li')
newLi.textContent = "Item 4"

document.body.children[0].appendChild(newLi);

console.log('%cstart 3', "color:tomato");
console.log(liHTMLCollection);
console.log(liNodeList);
console.log('%cend 3', "color:tomato");

// section + h1 + a tag (google)

// let section = document.createElement('section')
// section.textContent = "<h1>WELCOME TO PARADISE</h1>" + <a href="www.google.de">Visit the paradise</a>

// createElement('section')
// section = document.createElement('h1')

const section = document.createElement('section');
const headline = document.createElement('h1');
const anchor = document.createElement('a');

headline.textContent = "Welcome to paradise"
anchor.textContent = "Visit the paradise";
anchor.href = "https://www.google.de"
anchor.setAttribute('href', 'https://www.google.de')
anchor.setAttribute('class', 'textStyleAnchor')


document.body.appendChild(section)
section.appendChild(headline)
section.appendChild(anchor)

const li2 = document.createElement('li')
li2.textContent = "Item 5"

document.body.children[0].prepend(li2); 

// document.body.children[0].removeChild(li2.firstChildElement);

// li2.removeChild(li2.firstChildElement)

// document.body.children[0].removeChild(li2);
document.body.children[0].children[0].remove()


