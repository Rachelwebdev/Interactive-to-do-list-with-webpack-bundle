import { addNewTask, ListItems } from '../addItem.js';

describe('MOK DOM Manipulation', () => {
  addNewTask('New Task 1');
  addNewTask('New Task 2');
  test('Check if tasks are properly displayed', () => {
    document.body.innerHTML = '<ul class="toDoContainer" id="list"></ul>';
    const toDoList = document.querySelector('.toDoContainer');
    ListItems.forEach((toDo) => {
      const listItemTask = document.createElement('li');
      listItemTask.classList.add('toDoContainer-li');

      const toDoCheckbox = document.createElement('input');
      toDoCheckbox.classList.add('toDoContainer-li-checkbox');
      toDoCheckbox.type = 'checkbox';
      toDoCheckbox.checked = toDo.completed;
      listItemTask.appendChild(toDoCheckbox);

      const toDoText = document.createElement('input');
      toDoText.classList.add('toDoContainer-li-text');
      toDoText.value = toDo.task;
      listItemTask.appendChild(toDoText);

      if (toDo.completed) {
        toDoText.classList.add('completed');
      }
      const deleteIcon = document.createElement('span');
      deleteIcon.classList.add('trash-can');
      deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
      listItemTask.appendChild(deleteIcon);
      toDoList.appendChild(listItemTask);
    });
    const list = document.querySelectorAll('.toDoContainer li');
    expect(list).toHaveLength(ListItems.length);
  });
});
