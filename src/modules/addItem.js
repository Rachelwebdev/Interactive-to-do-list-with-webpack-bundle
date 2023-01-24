import { updateLocalStorage } from "./data.js";

// Add Task
export const addTask = (toDoListArray, task) => {
  toDoListArray.push({
    task,
    completed: false,
    id: toDoListArray.length + 1,
  });
  updateLocalStorage(toDoListArray);
};
