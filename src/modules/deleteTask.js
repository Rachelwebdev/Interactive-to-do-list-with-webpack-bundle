import { updateLocalStorage } from "./data.js";
import { displayListTasks } from "./listCard.js";

export const removeTask = (event, taskList) => {
  const clickedElement = event.target.closest(".trash-can");
  const taskToRemove = clickedElement.previousElementSibling.value;
  const index = taskList.findIndex((task) => task.task === taskToRemove);
  taskList.splice(index, 1);
  taskList.forEach((task, idx) => {
    task.id = idx + 1;
  });
  updateLocalStorage(taskList);
  displayListTasks(taskList);
};
