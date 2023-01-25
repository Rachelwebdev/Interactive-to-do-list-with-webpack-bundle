import mockStorage from '../__mocks__/localStorage.js';
import addNewTask from '../addItem.js';

test('Add one new item to the list', () => {
  document.body.innerHTML =
    '<div>' + '<ul id="list"><li>Sleeping</li></ul>' + '</div>';
  addNewTask();
  const list = document.querySelectorAll('#list li');
  expect(list).toHaveLength(1);
  mockStorage();
});
