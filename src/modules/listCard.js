import { updateLocalStorage, getLocalStorage } from "./data.js";

const toDoList = document.querySelector(".toDoContainer");

// Add Task
export const addTask = (toDoListArray, task) => {
  toDoListArray.push({ task, completed: false, id: toDoListArray.length + 1 });
  updateLocalStorage(toDoListArray);
};

export const renderToDoList = (toDoListArray) => {
  toDoList.innerHTML = "";

  toDoListArray = getLocalStorage();
  toDoListArray.forEach((toDo) => {
    const toDoItem = document.createElement("li");
    toDoItem.classList.add("toDoContainer-li");

    const toDoCheckbox = document.createElement("input");
    toDoCheckbox.classList.add("toDoContainer-li-checkbox");
    toDoCheckbox.type = "checkbox";
    toDoCheckbox.checked = toDo.completed;
    toDoItem.appendChild(toDoCheckbox);

    const toDoText = document.createElement("input");
    toDoText.classList.add("toDoContainer-li-text");
    toDoText.value = toDo.task;
    toDoItem.appendChild(toDoText);

    if (toDo.completed) {
      toDoText.classList.add("completed");
    }
    const crossIcon = document.createElement("span");
    crossIcon.classList.add("trash-can");
    crossIcon.innerHTML = "🗑️";
    toDoItem.appendChild(crossIcon);
    toDoList.appendChild(toDoItem);
  });
};

// Edit Task
export const editTask = (e, toDoListArray) => {
  const clickedTask = e.target.closest(".toDoContainer-li-text");
  clickedTask.disabled = false;
  clickedTask.focus();
  const taskText = clickedTask.value;
  clickedTask.addEventListener("keyPress", (e) => {
    console.log(clickedTask);
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
