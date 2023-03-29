console.log('läuft');

// Nutze:
// onClick
// selectedIndex
// remove()


const btn = document.querySelector('#button');
const colorSelection = document.querySelector('#farbeAuswahlen')
console.log(colorSelection);

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const index = colorSelection.selectedIndex
    switch (index) {
        case 0:
            colorSelection[0].remove()
            break;
        case 1:
            colorSelection[1].remove()
            break;
        case 2:
            colorSelection[2].remove()
            break;
        case 3:
            colorSelection[3].remove()
            break;
        case 4:
            colorSelection[4].remove()
            break;
        case 5:
            colorSelection[5].remove()
            break;
        case 6:
            colorSelection[6].remove()
            break;
        case 7:
            colorSelection[7].remove()
            break;
        case 8:
            colorSelection[8].remove()
            break;
        case 9:
            colorSelection[9].remove()
            break;
    }
})

