let grid_container = document.querySelector(".container");
const cells_cta = document.querySelector("#cta");

//64 is a default grid number
let cells_number = 64;

function createDivs(cells, parent) {
  const dimension = 960 / cells;
  const newDiv = document.createElement("div");
  newDiv.style.border = "1px solid black";
  newDiv.style.height = `${dimension.toString()}px`;
  newDiv.style.width = `${dimension.toString()}px`;
  parent.appendChild(newDiv);
  newDiv.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
  return;
}

cells_cta.addEventListener("click", () => {
  //saves the user input as a number
  cells_number = Number(prompt("Enter the number of cells on one side"));

  if (cells_number > 100) {
    alert("The number shouldn't be higher then 100");
    return;
  }
  if (cells_number) {
    //removes the previous grid, if user inputs new number via prompt
    [...grid_container.children].forEach((child) => child.remove());
    //creates a new grid
    for (i = 0; i < cells_number * cells_number; i++) {
      createDivs(cells_number, grid_container);
    }
  }
});

for (i = 0; i < cells_number * cells_number; i++) {
  createDivs(cells_number, grid_container);
}
