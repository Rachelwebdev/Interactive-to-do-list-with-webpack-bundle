import { ListItems } from './addItem.js';

const removeCompleted = (id, completed) => {
  ListItems.filter((element) => element.id === id).forEach((element) => {
    element.completed = completed;
  });
  return ListItems;
};

export default removeCompleted;
