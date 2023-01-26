import { updateLocalStorage } from './data.js';

export const ListItems = [];

// Add Task
export const addNewTask = (taskList, newTask) => {
  ListItems.push({
    task: newTask,
    completed: false,
    id: ListItems.length + 1,
  });
  updateLocalStorage(taskList);
};
