// SECTION constants
const gridContainer = document.querySelector(".grid-container");

// SECTION Variables

const createGrid = function (gridSize = 16) {
  let gridElement = document.createElement("div");
  gridElement.className = "grid-element";
  gridContainer.appendChild(gridElement);
  for (let h = 1; h <= gridSize; h++) {
    let rowElement = document.createElement("div");
    rowElement.className = "row";
    rowElement.style.height = `${700 / gridSize}px`;
    for (let i = 1; i <= gridSize; i++) {
      let boxElement = document.createElement("div");
      boxElement.style.height = `${700 / gridSize}px`;
      boxElement.style.width = `${700 / gridSize}px`;
      boxElement.className = "box";
      rowElement.appendChild(boxElement);
    }
    gridElement.appendChild(rowElement);
  }
};

createGrid();
