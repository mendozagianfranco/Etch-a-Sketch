let container = document.querySelector('.container');
let btnChange = document.querySelector('.btn');

btnChange.addEventListener('click', createGrid);

function createGrid() {
    container.innerHTML = ''; // Delete the grid that was there before
    let inputUser = prompt(
        //Request grid size per side from the user.
        'Insert grid side dimension. From 1 up to a maximum of 100',
        ''
    );

    if (inputUser < 1 || inputUser > 100) {
        alert('Invalid size. Enter a number between 1 and 100');
    }

    let sizeGrid = inputUser * inputUser; // Calculate number of divs to be added to the grid

    for (let i = 0; i < sizeGrid; i++) {
        // Create grid
        let div = document.createElement('div');
        container.appendChild(div);
    }

    let divs = document.querySelectorAll('.container > div');
    divs.forEach((divs) => {
        // Sets the height and width of the divs according to the chosen grid size.
        divs.style.width = `calc(100% / ${inputUser})`;
        divs.style.height = `calc(100% / ${inputUser})`;
    });

    divs.forEach((divs) => {
        // Changes div background when the mouse hovers over it
        divs.addEventListener('mouseover', function () {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            divs.style.backgroundColor = `#${randomColor}`;
        });
    });
}
