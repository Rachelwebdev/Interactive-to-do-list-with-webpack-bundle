// Import statements
import listItems from "./data.js";
import { removeTask } from "./addRemove.js";
import { forEach } from "lodash";

// Create Variables

const toDoListContainer = document.getElementById("to-do-list-container");

const listItemDisplay = () => {
  toDoListContainer.innerHTML = "";
  listItems
    .sort((a, b) => a.index - b.index)
    .forEach((item) => {
      toDoListContainer.innerHTML += `
        <li id="li-element">
            <input type="checkbox" id="${item.id}" value="${item.completed}" />${item.task}            
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <i class="fa-solid fa-trash"></i>        
          </li>
      `;
    });
  const deleteIcon = document.querySelectorAll(".fa-trash");

  for (let i = 0; i < deleteIcon.length; i += 1) {
    deleteIcon[i].addEventListener("click", (e) => {
      removeTask(e.target.parentElement);
      console.log(listItems);
    });
  }
};

export default listItemDisplay;
