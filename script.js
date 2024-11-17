const grid = document.querySelector("#grid");
const gridButton = document.querySelector("#grid-button");

function drawGrid(gridSize = 16) {
  for (let i = 1; i <= gridSize ** 2; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.flex = `1 0 ${1 / gridSize * 100}%`
    grid.appendChild(gridItem);
  }
  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((item) => {
    item.addEventListener("mouseover", () => {
      colorOnHover(item);
    });
  });
}

function colorOnHover(element) {
  element.style.backgroundColor = "gray";
}

function changeGridSize() {
  let gridSize = prompt("What size do you want the grid to be? (max. 100)");
  if (gridSize > 100) {gridSize = 100};
  grid.innerHTML = "";
  drawGrid(gridSize);
}

document.addEventListener("DOMContentLoaded", () => drawGrid());
gridButton.addEventListener("click", () => changeGridSize());