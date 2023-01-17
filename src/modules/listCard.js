import listItems from "./data.js";

const toDoListContainer = document.getElementById("to-do-list-container");

const cardDisplay = () => {
  listItems.forEach((item) => {
    const toDoListItems = `
        <ul>
          <li class="item-list">${item.description}</li>         
        </ul>
          `;
    toDoListContainer.insertAdjacentHTML("afterbegin", toDoListItems);
  });
};

export default cardDisplay;
