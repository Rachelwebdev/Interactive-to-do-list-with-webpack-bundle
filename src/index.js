import './style.css';

import {
  renderToDoList,
  addTask,
  editTask,
  deleteTask,
} from './modules/listCard.js';

import { updateLocalStorage, getLocalStorage as toDoTasks } from './modules/data.js';

const input = document.querySelector('.inputField');
const todoList = document.querySelector('.toDoContainer');
const addTaskBtn = document.querySelector('.insert-btn');

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
    addTask(toDoTasks(), input.value);
    input.value = '';
    renderToDoList(toDoTasks());
  }
});

addTaskBtn.addEventListener('click', () => {
  if (input.value !== '') {
    addTask(toDoTasks(), input.value);
    input.value = '';
    updateLocalStorage(toDoTasks());
    renderToDoList(toDoTasks());
  }
});

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

const render = () => {
  window.addEventListener('load', renderToDoList(toDoTasks()));
};
render();
