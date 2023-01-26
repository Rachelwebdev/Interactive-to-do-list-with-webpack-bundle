import removeCompleted from '../clearCompleted.js';
import { addNewTask, ListItems } from '../addItem.js';

describe('test for clearcomplete task', () => {
  addNewTask('This is first clearcomplete task');
  addNewTask('This is second clearcomplete task');
  addNewTask('This is third clearcomplete task');
  addNewTask('This is fourth clearcomplete task');
  it('removeCompleted', () => {
    const complete = removeCompleted(2, true);
    expect(complete).toEqual(ListItems);
  });

  it('completeIndex', () => {
    const complete = removeCompleted(3, true);
    expect(complete).toHaveLength(4);
  });
});
