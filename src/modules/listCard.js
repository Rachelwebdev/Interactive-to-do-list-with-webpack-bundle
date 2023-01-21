import { updateLocalStorage, getLocalStorage } from "./data.js";

const toDoList = document.querySelector(".toDoContainer");

export const renderToDoList = (toDoListArray) => {
  toDoList.innerHTML = "";

  toDoListArray = getLocalStorage();
  toDoListArray.forEach((toDo) => {
    const listItemTask = document.createElement("li");
    listItemTask.classList.add("toDoContainer-li");

    const toDoCheckbox = document.createElement("input");
    toDoCheckbox.classList.add("toDoContainer-li-checkbox");
    toDoCheckbox.type = "checkbox";
    toDoCheckbox.checked = toDo.completed;
    listItemTask.appendChild(toDoCheckbox);

    const toDoText = document.createElement("input");
    toDoText.classList.add("toDoContainer-li-text");
    toDoText.value = toDo.task;
    listItemTask.appendChild(toDoText);

    if (toDo.completed) {
      toDoText.classList.add("completed");
    }
    const deleteIcon = document.createElement("span");
    deleteIcon.classList.add("trash-can");
    deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
    listItemTask.appendChild(deleteIcon);
    toDoList.appendChild(listItemTask);
  });
};

// Add Task
export const addTask = (toDoListArray, task) => {
  toDoListArray.push({
    task,
    completed: false,
    id: toDoListArray.length + 1,
  });
  updateLocalStorage(toDoListArray);
};

// Edit Task
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

// Delete Task
export const deleteTask = (e, toDoListArray) => {
  const clickedCross = e.target.closest(".trash-can");
  const clickedTask = clickedCross.previousElementSibling;
  const taskIndex = toDoListArray.findIndex(
    (task) => task.task === clickedTask.value
  );
  toDoListArray.splice(taskIndex, 1);
  toDoListArray.forEach((task, index) => {
    task.id = index + 1;
  });
  updateLocalStorage(toDoListArray);
  renderToDoList(toDoListArray);
};

// Clear Completed Task
export const clearCompleted = (toDoListArray) => {
  toDoListArray = toDoListArray.filter((task) => task.completed === false);
  toDoListArray.forEach((task, index) => {
    task.id = index + 1;
  });
  return toDoListArray;
};

// Marked Complete

export const markTask = (e, toDoListArray) => {
  const clickedCheckbox = e.target.closest(".toDoContainer-li-checkbox");
  const clickedTask = clickedCheckbox.nextElementSibling;
  const taskIndex = toDoListArray.findIndex(
    (task) => task.task === clickedTask.value
  );
  toDoListArray = getLocalStorage();
  toDoListArray[taskIndex].completed = !toDoListArray[taskIndex].completed;
  updateLocalStorage(toDoListArray);
  renderToDoList(toDoListArray);
};
