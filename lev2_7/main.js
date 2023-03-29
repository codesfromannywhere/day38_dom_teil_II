console.log('läuft');

// Nutze:
// querySelector()
// addEventListener()
// let counter = 0;
// createElement()
// textContent()
// appendChild()
// classList


const container = document.querySelector('.umwickeln') 
const btn = document.querySelector('#button')
let counter = 0;

const rechteckEle = document.createElement('div');
rechteckEle.textContent = counter
rechteckEle.className += "weiss"
document.body.appendChild(rechteckEle)

btn.addEventListener('click', (event) => {
    event.preventDefault(); 
    counter++
console.log(counter);
})

if (counter === 10) {

    
} else {
    
}
if (condition) {
    
}
//nur eine bedingung

for (let index = 0; index < 50; index++) {
    element = counter[index];
    console.log(rechteckEle);
}