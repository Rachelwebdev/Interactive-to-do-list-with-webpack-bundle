// import { getLocalStorage } from "./data.js";

// const toDoList = document.querySelector(".toDoContainer");

// export const displayListTasks = (toDoListArray) => {
//   toDoList.innerHTML = "";
//   toDoListArray = getLocalStorage();

//   toDoListArray.forEach((toDo) => {
//     const listItemTask = document.createElement("li");
//     listItemTask.classList.add("toDoContainer-li");

//     const toDoCheckbox = document.createElement("input");
//     toDoCheckbox.classList.add("toDoContainer-li-checkbox");
//     toDoCheckbox.type = "checkbox";
//     toDoCheckbox.checked = toDo.completed;
//     listItemTask.appendChild(toDoCheckbox);

//     const toDoText = document.createElement("input");
//     toDoText.classList.add("toDoContainer-li-text");
//     toDoText.value = toDo.task;
//     listItemTask.appendChild(toDoText);

//     if (toDo.completed) {
//       toDoText.classList.add("completed");
//     }
//     const deleteIcon = document.createElement("span");
//     deleteIcon.classList.add("trash-can");
//     deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
//     listItemTask.appendChild(deleteIcon);
//     toDoList.appendChild(listItemTask);
//   });
// };
import { getLocalStorage } from "./data.js";
// import addNewTask from "./addItem.js";

const toDoContainer = document.querySelector(".toDoContainer");

const displayListTask = () => {
  toDoContainer.innerHTML = "";
  const taskList = getLocalStorage();
  // console.log(taskList);
  taskList.forEach((task) => {
    const listTasks = `<li class="list-items">
            <div class="checkbox-text-container">

              <!-- input checkbox -->              
              <input type="checkbox" name="checkbox" id="${task.id}" ${task.completed} />

              <!-- editable p tag -->
              <p class="editable-list" contenteditable="true">
              ${task.description}               
              </p>

            </div>

            <!-- elipsis icon -->
            <i class="fa-solid fa-ellipsis-vertical"></i>

            <!-- div with edit btn and dustbin icon -->
            <div class="edit-trash-container">
              <button id="edit-btn">edit</button>
              <i class="fa-solid fa-trash"></i>
            </div>
            
          </li>`;
    toDoContainer.innerHTML = listTasks;
  });
};

displayListTask();

export default displayListTask;
