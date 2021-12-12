// SECTION constants
const gridContainer = document.querySelector(".grid-container");
const inputRange = document.getElementById("grid-size");
const clearButton = document.getElementById("clear-button");

// SECTION Variables
let currentSize = document.getElementById("current-size");

// Create grid with a default size of 16 x 16
const createGrid = function (gridSize = 16) {
  let gridElement = document.createElement("div");
  gridElement.className = "grid-element";
  gridContainer.appendChild(gridElement);

  // Create row element, and add "gridSize"
  for (let h = 1; h <= gridSize; h++) {
    let rowElement = document.createElement("div");
    rowElement.className = "row";
    rowElement.style.height = `${700 / gridSize}px`;

    // Create box element and append it to row element.
    for (let i = 1; i <= gridSize; i++) {
      let boxElement = document.createElement("div");
      boxElement.style.height = `${700 / gridSize}px`;
      boxElement.style.width = `${800 / gridSize}px`;
      boxElement.className = "box";
      rowElement.appendChild(boxElement);
    }

    // Append rowElement to div.grid-element
    gridElement.appendChild(rowElement);
  }
};

createGrid();

// Get input from user and update grid.
let updateRangeAndGrid = function () {
  gridContainer.innerHTML = "";
  createGrid(inputRange.value);
  currentSize.textContent = `${inputRange.value} x ${inputRange.value}`;
};

// Get size from user
inputRange.addEventListener("input", function () {
  updateRangeAndGrid();
});

// Clear grid
clearButton.addEventListener("click", function () {
  updateRangeAndGrid();
});
