// import { updateLocalStorage } from "./data.js";

// // Add Task
// const addNewTask = (toDoListArray, newTask) => {
//   toDoListArray.push({
//     task: newTask,
//     completed: false,
//     id: toDoListArray.length + 1,
//   });
//   updateLocalStorage(toDoListArray);
// };

// if (inputField.value === "") {
//   const alertMessage = document.createElement("p");
//   alertMessage.classList.add("alert");
//   inputContainer.insertAdjacentElement("afterend", alertMessage);
//   alertMessage.innerHTML = "Add a new Task";
//   return;
// } else {
//   alertMessage.innerHTML = "";
// }

// export default addNewTask;

import { setLocalStorage } from "./data.js";

const inputField = document.getElementById("new-task");

const addNewTask = () => {
  const inputValue = inputField.value;
  const myToDoList = [];
  myToDoList.push({
    description: inputValue,
    completed: false,
    id: myToDoList.length + 1,
  });
  setLocalStorage(myToDoList);
};

export default addNewTask;
