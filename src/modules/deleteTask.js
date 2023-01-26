import { updateLocalStorage } from './data.js';
import { displayListTasks } from './listCard.js';
import { ListItems } from './addItem.js';

export const removeTask = (taskList, index) => {
  const updatedList = ListItems.filter((item) => item.index !== index);
  ListItems.length = 0;
  let count = 1;
  updatedList.forEach((elem) => {
    elem.index = count;
    ListItems.push(elem);
    count += 1;
  });
  updateLocalStorage(taskList);
  displayListTasks(taskList);
  return ListItems;
};
export default removeTask;
