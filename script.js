const grid = document.querySelector("#grid");

function drawGrid() {
  for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    grid.appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", () => drawGrid());
