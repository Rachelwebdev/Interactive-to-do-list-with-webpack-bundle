import { ListItems } from './addItem.js';
import deleteTask from './deleteTask.js';
import { updateLocalStorage } from './data.js';

const clearCompletedTask = () => {
  let count = 0;
  for (let k = 0; k < ListItems.length; k += 1) {
    if (ListItems[k].completed === true) {
      count += 1;
    }
  }
  for (let i = 0; i < count; i += 1) {
    for (let j = 0; j < ListItems.length; j += 1) {
      if (ListItems[j].completed === true) {
        deleteTask(ListItems[j].id);
        updateLocalStorage(ListItems);
      }
    }
  }
  return ListItems;
};

export default clearCompletedTask;
