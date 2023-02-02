// import { updateLocalStorage } from "./data.js";
// import { displayListTasks } from "./listCard.js";

// const modifyTask = (toDoListArray, event) => {
//   const clickedTask = event.target.closest(".toDoContainer-li-text");
//   clickedTask.disabled = false;
//   clickedTask.focus();
//   const taskText = clickedTask.value;
//   clickedTask.addEventListener("click", (event) => {
//     event.preventDefault();
//     if (clickedTask.value !== "") {
//       const taskIndex = taskList.findIndex((task) => task.task === taskText);
//       taskList[taskIndex].task = clickedTask.value;
//       clickedTask.disabled = true;
//       updateLocalStorage(toDoListArray);
//       displayListTasks(toDoListArray);
//     }
//   });
// };

// export default modifyTask;
