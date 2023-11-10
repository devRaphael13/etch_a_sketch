const boardSection = document.getElementById("board_section")
const pixels = document.getElementsByClassName("pixel")

document.addEventListener("DOMContentLoaded", () => createBoard())

function createBoard() {
  for (let i = 0; i < 16; i++) {
    const childRow = document.createElement("div");
    childRow.setAttribute("class", "board-section__row");
    boardSection.appendChild(childRow);

    for (let j = 0; j < 16; j++) {
      const childCol = document.createElement("div");
      childCol.setAttribute("class", "board-section__col pixel");
      childRow.appendChild(childCol);
    }
  }

  draw()
}

function draw() {
  for (let element of pixels) {
    element.addEventListener("click", (e) => {e.target.style.backgroundColor = "crimson"})
  }
}