import { updateLocalStorage } from './data.js';

// Add Task
export const addNewTask = (taskList, newTask) => {
  const ListItems = [];
  ListItems.push({
    task: newTask,
    completed: false,
    id: ListItems.length + 1,
  });
  updateLocalStorage(taskList);
};
export default addNewTask;