//GET COLOR INPUT FROM BUTTONS CLICKED AND USER PROMPT FOR SIZE
function getSize(colorSelected){
  let gridSize=0;
  while (isNaN(gridSize) || gridSize === null || gridSize < 16 || gridSize > 100){
    gridSize = prompt ("ETCH-A-SKETCH: Enter the grid gridSize from 16 to 100", 16);
  }
  drawGrid(gridSize, colorSelected);
}

//FUNC FOR DRAWING THE ACTUAL GRID BY CREATING DIVS
function drawGrid(gridSize, colorSelected) {
  let numOfRows=-1, numOfCols=0, divText='';
  while(++numOfRows<gridSize) {
    divText+= '<div class="row">';
    for(numOfCols=0; numOfCols<gridSize; numOfCols++) 
      divText+= `<div class="cell"></div>`;
      divText+= '</div>';
  }
  container.innerHTML = divText;
   
  const cells = document.getElementsByClassName("cell");
  for (let x = 0; x < cells.length; x++) {
    // cells[x].style["width"] = `${500/gridSize}px`;
    // cells[x].style["height"] = `${500/gridSize}px`;
    cells[x].addEventListener("mouseenter", event =>        
    cells[x].style.backgroundColor=rndColor(colorSelected), false); 
  }
}

//DEFAULT WHITE COLOR GENERATOR
let rgbValue=280.5;
function rndColor(colorSelected){
  if (colorSelected=='white'){
    return 'rgb(255, 255, 255)';
    }

  //FADE TO BLACK GENERATOR
  else if (colorSelected=='fade'){
    rgbValue = rgbValue-25.5;
    if(rgbValue<=0){
      rgbValue=255;
    }
    return `rgb(${rgbValue}, ${rgbValue}, ${rgbValue}`;

  //RANDOM COLOR GENERATOR
  } else {    
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b}`;
  }
}