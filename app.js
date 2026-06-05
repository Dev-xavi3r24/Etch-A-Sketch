// define getGridSize function
function getGridSize(gridSize){

    const container = document.getElementById('container');
    const squaresPerSide = gridSize;
    const squareSize = 960/ squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;

    container.innerHTML = "";

    for (let i= 0; i < totalSquares; i++){
        const gridDiv = document.createElement('div');
        gridDiv.dataset.hoverCount = 0;  // Set when creating the square
        gridDiv.classList.add('square');
        gridDiv.style.width = squareSize + 'px';
        gridDiv.style.height = squareSize + 'px';
        
        gridDiv.addEventListener('mouseover', () => {
            //gridDiv.classList.add('hovered');
        let currentCount = Math.min(Number(gridDiv.dataset.hoverCount) + 1, 10);
        gridDiv.dataset.hoverCount = currentCount;
        
        // Check: does this square already have a base color?

        if (!gridDiv.dataset.baseColor){
            let redColor = Math.floor (Math.random() * 256);
            let greenColor = Math.floor (Math.random() * 256);
            let blueColor = Math.floor (Math.random() * 256);

            // Save the individual values!
            gridDiv.dataset.baseRed = redColor;
            gridDiv.dataset.baseGreen = greenColor;
            gridDiv.dataset.baseBlue = blueColor;

            const randomColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
            

            gridDiv.dataset.baseColor = randomColor;
            
            gridDiv.style.backgroundColor = randomColor;
        } 

        const darkingFactor = 1.0 - (currentCount * 0.1);

        const darkenedRed = Math.floor(gridDiv.dataset.baseRed * darkingFactor);
        const darkenedGreen = Math.floor(gridDiv.dataset.baseGreen * darkingFactor);
        const darkenedBlue = Math.floor(gridDiv.dataset.baseBlue * darkingFactor);

        const darkedColor = `rgb(${darkenedRed}, ${darkenedGreen}, ${darkenedBlue})`;

        gridDiv.style.backgroundColor = darkedColor;


        const showHoverTimes = document.getElementById("hoverSquareTimes");

        showHoverTimes.textContent = `${currentCount}/10`;
        
        // get the opacity, 
        
        
});
    container.appendChild(gridDiv);
        
    }
}


// initial grid
getGridSize(16);

// button to generate new grid
const generateBtn = document.getElementById('gridSizeBtn');
generateBtn.addEventListener('click', () => {
    let userInputGridSize = prompt('Enter a valid number from 1 to 100:');
    userInputGridSize = Number(userInputGridSize);

    if (isNaN(userInputGridSize) || userInputGridSize < 1 || userInputGridSize > 100) {
        alert('Please, enter a valid number between 1 and 100');
        return;
    }

    getGridSize(userInputGridSize);
});

const getBlankGrid = document.getElementById("resetGridBtn");
getBlankGrid.addEventListener('click', () =>{
  const container = document.getElementById('container');
  const showHoverTimes = document.getElementById("hoverSquareTimes");

  container.innerHTML = "";
  showHoverTimes.textContent = "0";
});
