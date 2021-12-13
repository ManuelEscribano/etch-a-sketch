// SECTION constants
const gridContainer = document.querySelector(".grid-container");
const inputRange = document.getElementById("grid-size");
const clearButton = document.getElementById("clear-button");
const colorBtns = document.querySelectorAll(".color-btn");

// SECTION Variables
let currentSize = document.getElementById("current-size");
let selectedColor;

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

// Toggle active id on selected button.
let toggleActiveId = function (e) {
  for (let i = 0; i <= colorBtns.length; i++) {
    colorBtns[i].removeAttribute("id");
    e.target.id = "active";

    // Store the selected color into variable.
    selectedColor = e.target.classList[1];
  }
};

// Apply eventListener to each color button.
colorBtns.forEach((button) => {
  button.addEventListener("click", function (e) {
    toggleActiveId(e);
  });
});

// Create random color
let generateRandomColor = function () {
  let number = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + number.slice(0, 6);
};

// Add random color
let addRandomColor = function (e) {
  if (e.target.className === "box" && selectedColor === "random") {
    e.target.style.backgroundColor = generateRandomColor();
  }
};

// Add color
let addColor = function (e) {
  if (e.target.className === "box" && selectedColor) {
    e.target.style.backgroundColor = `${selectedColor}`;
  }
};

// Grid element.
gridContainer.addEventListener("mouseover", function (e) {
  addColor(e);
  addRandomColor(e);
});
