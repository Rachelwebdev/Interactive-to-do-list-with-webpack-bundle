import { updateLocalStorage } from "./data.js";
import { displayListTasks } from "./listCard.js";

// export const editTask = (e, tasksArray) => {
//   const clickedTask = e.target.closest(".toDoContainer-li-text");
//   clickedTask.disabled = false;
//   clickedTask.focus();
//   const taskText = clickedTask.value;
//   clickedTask.addEventListener("click", (event) => {
//     if (clickedTask.value !== "") {
//       const taskIndex = tasksArray.findIndex((task) => task.task === taskText);
//       tasksArray[taskIndex].task = clickedTask.value;
//       clickedTask.disabled = true;
//       updateLocalStorage(tasksArray);
//       displayListTasks(tasksArray);
//     }
//   });
// };

export const modifyTask = (event, taskList) => {
  const clickedTask = event.target.closest(".toDoContainer-li-text");
  clickedTask.disabled = false;
  clickedTask.focus();
  const taskText = clickedTask.value;
  clickedTask.addEventListener("click", (event) => {
    if (clickedTask.value !== "") {
      const taskIndex = taskList.findIndex((task) => task.task === taskText);
      taskList[taskIndex].task = clickedTask.value;
      clickedTask.disabled = true;
      updateLocalStorage(taskList);
      displayListTasks(taskList);
    }
  });
};
