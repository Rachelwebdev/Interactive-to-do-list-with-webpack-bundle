// Imports
import listItems from "./data.js";
import listItemDisplay from "./listCard.js";

// Variables declaration
const inputField = document.getElementById("inputField");
const kebabMenu = document.querySelector(".fa-ellipsis-vertical");

const addTask = () => {
  let inputValue = inputField.value;
  if (inputValue.trim() === "") {
    alert("input is empty");
    return;
  }
  listItems.push(inputValue);
  console.log(listItems);
  inputField.value = "";
  listItemDisplay();
};

const removeTask = () => {
  let inputValue = inputField.value;
  for (let i = 0; i < listItems.length; i++) {
    if (inputValue === listItems[i]) {
      listItems.splice(i, 1);
      console.log(listItems);
      break;
    }
  }
};

export default addTask;
