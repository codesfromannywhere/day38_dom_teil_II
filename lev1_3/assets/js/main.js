console.log("läuft");

// /Nutze:
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// innerHTML
// querySelectorAll
// querySelector
// addEventListener

const selectList = document.querySelector('#myList')
console.log(selectList);
const outPut = document.querySelector('output')

document.querySelectorAll('button')[0].addEventListener ('click', function () {
    outPut.innerHTML = selectList.firstElementChild.innerHTML;
})

document.querySelectorAll('button')[1].addEventListener ('click', function () {
    outPut.innerHTML = selectList.lastElementChild.innerHTML;
})

document.querySelectorAll('button')[2].addEventListener ('click', function () {
    outPut.innerHTML = selectList.firstElementChild.nextElementSibling.innerHTML;
})

document.querySelectorAll('button')[3].addEventListener ('click', function () {
    outPut.innerHTML = selectList.lastElementChild.previousElementSibling.innerHTML;
})
