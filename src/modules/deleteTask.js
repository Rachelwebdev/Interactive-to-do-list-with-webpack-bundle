import { updateLocalStorage } from "./data.js";
import { displayListTasks } from "./listCard.js";
import { ListItems } from "./addItem.js";
import { template } from "lodash";

export const removeTask = (index) => {
  const updatedList = ListItems.filter((item) => item.index !== index);
  ListItems.length = 0;
  let count = 1;
  updatedList.forEach((elem) => {
    elem.index = count;
    ListItems.push(elem);
    count += 1;
  });
  return ListItems;
  // const clickedElement = event.target.closest(".trash-can");
  // const taskToRemove = clickedElement.previousElementSibling.value;
  // const index = taskList.findIndex((task) => task.task === taskToRemove);
  // taskList.splice(index, 1);
  // taskList.forEach((task, idx) => {
  //   task.id = idx + 1;
  // });

  updateLocalStorage(taskList);
  displayListTasks(taskList);
};
export default removeTask;
