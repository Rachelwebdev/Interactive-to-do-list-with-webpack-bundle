// Import statements
import listItems from "./data.js";
import addTask from "./addRemove.js";
// Create Variables
const enterIcon = document.querySelector(".fa-arrow-turn-down");
const toDoListContainer = document.getElementById("to-do-list-container");

const ListItemDisplay = () => {
  listItems
    .sort((a, b) => a.index - b.index)
    .forEach((item) => {
      console.log(item);
      toDoListContainer.innerHTML += `
      <li class="to-do-task" value="index">${item}</li>
    `;
    });
};
enterIcon.addEventListener("click", () => {
  addTask();
});

export default ListItemDisplay;
