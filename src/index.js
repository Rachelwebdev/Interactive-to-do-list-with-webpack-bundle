import "./style.css";
import listItemDisplay from "./modules/listCard.js";
import { addTask } from "./modules/addRemove.js";

// Variables
const deleteButton = document.querySelector(".btn-add");

deleteButton.addEventListener("click", () => {
  addTask();
});

const render = () => {
  window.addEventListener("load", listItemDisplay());
};
render();
