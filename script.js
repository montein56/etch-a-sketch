//GET COLOR INPUT FROM BUTTONS CLICKED AND USER PROMPT FOR SIZE
function getSize(input){
  let size=0;
  while (isNaN(size) || size === null || size < 16 || size > 100){
    size = prompt ("ETCH-A-SKETCH: Enter the grid size from 16 to 100", 16);
  }
  drawGrid(size, input);
}

//FUNC FOR DRAWING THE ACTUAL GRID BY CREATING DIVS
function drawGrid(size, clr) {
  let n = size, i=-1, j=0, s='';
  while(++i<n) {
    s+= '<div class="row">';
    for(j=0; j<n; j++) s+= `<div class="cell"></div>`;
    s+= '</div>';
  }
  container.innerHTML = s;
  const cells = document.getElementsByClassName("cell");
  for (let x = 0; x < cells.length; x++) {
    cells[x].style["width"] = `${550/n}px`;
    cells[x].style["height"] = `${550/n}px`;
    cells[x].addEventListener("mouseenter", event =>        
    cells[x].style.backgroundColor=rndColor(clr), false); 
  }
}

//DEFAULT WHITE COLOR GENERATOR
let m=280.5;
function rndColor(xyz){
  if (xyz=='white'){
    return 'rgb(255, 255, 255)';
    }

  //FADE TO BLACK GENERATOR
  else if (xyz=='fade'){
    m = m-25.5;
    if(m<=0){
      m=255;
    }
    return `rgb(${m}, ${m}, ${m}`;

  //RANDOM COLOR GENERATOR
  } else {    
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b}`;
  }
}