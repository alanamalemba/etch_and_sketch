//selects the controls container
const controls = document.querySelector("#controls");

//creates a button to change grid size and appends to controls div
const setGridSize = document.createElement("button");
setGridSize.textContent = "Set grid size";
controls.appendChild(setGridSize);

//selects the grid container div
const gridContainer = document.querySelector("#grid-container");

let gridSize = 16;

insertGridBoxes();

function promptUser() {
  gridSize = prompt("INSERT GRID SIZE!");
  if (gridSize < 1) {
    alert("Number too small");
    return;
  } else if (gridSize > 100) {
    alert("Number too large");
    return;
  }
  // alert(gridSize);
  removeBoxes();
  insertGridBoxes();
}

function removeBoxes() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function insertGridBoxes() {
  setGridSize.addEventListener("click", promptUser);

  let gridHeight = 400 + gridSize * 2 + "px";
  let gridWidth = 400 + gridSize * 2 + "px";
  gridContainer.style.height = gridHeight;
  gridContainer.style.width = gridWidth;

  let noOfBoxes = gridSize * gridSize;

  for (let i = noOfBoxes; i > 0; i--) {
    createGridBox();
  }

  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "black";
    });
  });
}

function createGridBox() {
  const box = document.createElement("div");
  box.textContent = "a";
  box.classList.add("box");
  box.style.height = 400 / gridSize + "px";
  box.style.width = 400 / gridSize + "px";
  gridContainer.appendChild(box);
}
