const boardSection = document.getElementById("board_section")

document.addEventListener("DOMContentLoaded", () => createBoard())

function createBoard() {
    for (let i = 0; i < 16; i++) {
      const childRow = document.createElement("div");
      childRow.setAttribute("class", "board-section__board--row");
      boardSection.appendChild(childRow);

      for (let j = 0; j < 16; j++) {
        const childCol = document.createElement("div");
        childCol.setAttribute("class", "board-section__board--col");
        childRow.appendChild(childCol);
      }
    }

    console.log(boardSection)
}
