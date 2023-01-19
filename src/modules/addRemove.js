// Imports
import listItems from "./data.js";
import listItemDisplay from "./listCard.js";

// Variables declaration
const inputField = document.getElementById("inputField");
const editButton = document.gquerySelector("fa-ellipsis-vertical");

export const addTask = () => {
  let inputValue = inputField.value;
  if (inputValue.trim() === "") {
    alert("input is empty");
    return;
  }
  const newTask = {
    task: inputValue,
    id: listItems.length,
    completed: false,
  };
  listItems.push(newTask);
  console.log(listItems);
  inputField.value = "";
  listItemDisplay();
};

export const removeTask = (id) => {
  let count;
  listItems.filter((val, ind, arr) => {
    if (val.task === id.innerText) {
      console.log("it works");
      arr.splice(ind, 1);
      return true;
    }
    return false;
  });
  listItemDisplay();
};
