import './style.css';
import { addNewTask } from './modules/addItem.js';
import modifyTask from './modules/editTask.js';
import { removeTask } from './modules/deleteTask.js';
import removeCompleted from './modules/clearCompleted.js';
import completeTask from './modules/markTask.js';
import { displayListTasks } from './modules/listCard.js';

import {
  updateLocalStorage,
  getLocalStorage as tasksList,
} from './modules/data.js';

// Declare variables
const input = document.querySelector('.inputField');
const todoList = document.querySelector('.toDoContainer');
const addTaskBtn = document.querySelector('.insert-btn');

const clearCompletedBtn = document.querySelector('.clearbtn');

// ADD TASK EVENT LISTENER FOR CLICK EVENT

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addNewTask(tasksList(), input.value);
    input.value = '';
    updateLocalStorage(tasksList());
    displayListTasks(tasksList());
  }
});

// DELETE TASK

todoList.addEventListener('click', (event) => {
  if (event.target.closest('.trash-can')) {
    removeTask(event, tasksList());
  }
});

// EDIT TASK EVENT LISTENER

todoList.addEventListener('click', (event) => {
  if (event.target.closest('.toDoContainer-li-text')) {
    modifyTask(event, tasksList());
  }
});

// CLEAR COMPLETED EVENT LISTENER
clearCompletedBtn.addEventListener('click', () => {
  const toDoList = removeCompleted(tasksList());
  updateLocalStorage(toDoList);
  displayListTasks(tasksList());
});

// MARK TASK EVENT LISTENER
todoList.addEventListener('click', (event) => {
  if (event.target.closest('.toDoContainer-li-checkbox')) {
    completeTask(event, tasksList());
  }
});

const render = () => {
  window.addEventListener('load', displayListTasks(tasksList()));
};
render();
