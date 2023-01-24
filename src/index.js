import "./style.css";
import { addTask } from "./modules/addItem.js";
import { editTask } from "./modules/editTask.js";
import { deleteTask } from "./modules/deleteTask.js";
import { clearCompleted } from "./modules/clearCompleted.js";
import { markTask } from "./modules/markTask.js";
import { renderToDoList } from "./modules/listCard";

import {
  updateLocalStorage,
  getLocalStorage as toDoTasks,
} from "./modules/data.js";

// Declare variables
const input = document.querySelector(".inputField");
const todoList = document.querySelector(".toDoContainer");
const addTaskBtn = document.querySelector(".insert-btn");

const clearCompletedBtn = document.querySelector(".clearbtn");

// ADD TASK EVENT LISTENER FOR CLICK EVENT

addTaskBtn.addEventListener("click", () => {
  if (input.value !== "") {
    addTask(toDoTasks(), input.value);
    input.value = "";
    updateLocalStorage(toDoTasks());
    renderToDoList(toDoTasks());
  }
});

// EDIT TASK EVENT LISTENER

todoList.addEventListener("click", (e) => {
  if (e.target.closest(".toDoContainer-li-text")) {
    editTask(e, toDoTasks());
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.closest(".trash-can")) {
    deleteTask(e, toDoTasks());
  }
});

// CLEAR COMPLETED EVENT LISTENER
clearCompletedBtn.addEventListener("click", () => {
  const toDoList = clearCompleted(toDoTasks());
  updateLocalStorage(toDoList);
  renderToDoList(toDoTasks());
});

// MARK TASK EVENT LISTENER
todoList.addEventListener("click", (e) => {
  if (e.target.closest(".toDoContainer-li-checkbox")) {
    markTask(e, toDoTasks());
  }
});

const render = () => {
  window.addEventListener("load", renderToDoList(toDoTasks()));
};
render();
