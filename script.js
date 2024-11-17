const grid = document.querySelector("#grid");

function drawGrid() {
  for (let i = 1; i <= 256; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
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

document.addEventListener("DOMContentLoaded", () => drawGrid());
