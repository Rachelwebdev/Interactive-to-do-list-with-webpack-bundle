// import clearCompletedTask from '../clearAll.js';
// import { addNewTask } from '../addItem.js';
// import removeCompleted from '../clearCompleted.js';

// describe('clear All Completed task', () => {
//   addNewTask('hello world');
//   addNewTask('hello zewidu');
//   addNewTask('hello tobby');
//   addNewTask('hello microverse');
//   removeCompleted(1, true);
//   removeCompleted(3, true);
//   test('clearAllCompleted should be exist ', () => {
//     expect(clearCompletedTask).toBeDefined();
//   });

//   test('should expect an array', () => {
//     const clearcompleted = clearCompletedTask();
//     expect(clearcompleted).toHaveLength(0);
//   });
//   // there should be no true value in object array
//   test('shoud not have completed task with value of true', () => {
//     expect(clearCompletedTask()).not.toEqual(
//       expect.arrayContaining([expect.objectContaining({ completed: true })]),
//     );
//   });
// });
