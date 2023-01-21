import './style.css';

import {
  renderToDoList,
  addTask,
  clearCompleted,
  editTask,
  deleteTask,
  markTask,
} from './modules/listCard.js';

import {
  updateLocalStorage,
  getLocalStorage as toDoTasks,
} from './modules/data.js';

// Declare variables
const input = document.querySelector('.inputField');
const todoList = document.querySelector('.toDoContainer');
const addTaskBtn = document.querySelector('.insert-btn');

const clearCompletedBtn = document.querySelector('.clearbtn');

// ADD TASK EVENT LISTENER FOR KEYPRESS EVENT

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
    addTask(toDoTasks(), input.value);
    input.value = '';
    renderToDoList(toDoTasks());
  }
});

// ADD TASK EVENT LISTENER FOR CLICK EVENT

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addTask(toDoTasks(), input.value);
    input.value = '';
    updateLocalStorage(toDoTasks());
    renderToDoList(toDoTasks());
  }
});

// EDIT TASK EVENT LISTENER

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.toDoContainer-li-text')) {
    editTask(e, toDoTasks());
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.closest('.trash-can')) {
    deleteTask(e, toDoTasks());
  }
});

// CLEAR COMPLETED EVENT LISTENER
clearCompletedBtn.addEventListener('click', () => {
  const toDoList = clearCompleted(toDoTasks());
  updateLocalStorage(toDoList);
  renderToDoList(toDoTasks());
});

// MARK TASK EVENT LISTENER
todoList.addEventListener('click', (e) => {
  if (e.target.closest('.toDoContainer-li-checkbox')) {
    markTask(e, toDoTasks());
  }
});

const render = () => {
  window.addEventListener('load', renderToDoList(toDoTasks()));
};
render();
