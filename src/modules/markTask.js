import { getLocalStorage, updateLocalStorage } from "./data.js";
import { renderToDoList } from "./listCard.js";

export const markTask = (e, toDoListArray) => {
  const clickedCheckbox = e.target.closest(".toDoContainer-li-checkbox");
  const clickedTask = clickedCheckbox.nextElementSibling;
  const taskIndex = toDoListArray.findIndex(
    (task) => task.task === clickedTask.value
  );
  toDoListArray = getLocalStorage();
  toDoListArray[taskIndex].completed = !toDoListArray[taskIndex].completed;
  updateLocalStorage(toDoListArray);
  renderToDoList(toDoListArray);
};
