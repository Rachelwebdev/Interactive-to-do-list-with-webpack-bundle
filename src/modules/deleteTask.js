// import { updateLocalStorage } from "./data.js";
// import { displayListTasks } from "./listCard.js";

// export const deleteTask = (e, toDoListArray) => {
//   const clickedCross = e.target.closest(".trash-can");
//   const clickedTask = clickedCross.previousElementSibling;
//   const taskIndex = toDoListArray.findIndex(
//     (task) => task.task === clickedTask.value
//   );
//   toDoListArray.splice(taskIndex, 1);
//   toDoListArray.forEach((task, index) => {
//     task.id = index + 1;
//   });
//   updateLocalStorage(toDoListArray);
//   displayListTasks(toDoListArray);
// };
// export default deleteTask;
