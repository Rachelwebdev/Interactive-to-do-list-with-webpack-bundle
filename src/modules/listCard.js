import listItems from "./data.js";
const toDoListContainer = document.getElementById("to-do-list-container");

const cardDisplay = () => {
  listItems
    .sort((a, b) => a.index - b.index)
    .forEach((item) => {
      toDoListContainer.innerHTML += `
      <li class="to-do-task" value="index">${item.description}</li>
    `;
    });
};

export default cardDisplay;
