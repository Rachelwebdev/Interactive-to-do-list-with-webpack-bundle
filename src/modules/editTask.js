import { updateLocalStorage } from "./data.js";
import { renderToDoList } from "./listCard.js";

export const editTask = (e, toDoListArray) => {
  const clickedTask = e.target.closest(".toDoContainer-li-text");
  clickedTask.disabled = false;
  clickedTask.focus();
  const taskText = clickedTask.value;
  clickedTask.addEventListener("keyPress", (e) => {
    if (e.key === "Enter" && clickedTask.value !== "") {
      const taskIndex = toDoListArray.findIndex(
        (task) => task.task === taskText
      );
      toDoListArray[taskIndex].task = clickedTask.value;
      clickedTask.disabled = true;
      updateLocalStorage(toDoListArray);
      renderToDoList(toDoListArray);
    }
  });
};
