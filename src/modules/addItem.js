import { updateLocalStorage } from "./data.js";

// Add Task
export const addNewTask = (taskList, newTask) => {
  taskList.push({
    task: newTask,
    completed: false,
    id: taskList.length + 1,
  });
  updateLocalStorage(taskList);
};
