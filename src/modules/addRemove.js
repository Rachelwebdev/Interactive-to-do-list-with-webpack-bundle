import listItems from "./data.js";
const inputField = document.getElementById("inputField");

const addTask = () => {
  let inputValue = inputField.value;
  console.log(inputValue);
  listItems.push(inputValue);
  console.log(listItems);
  inputField.value = "";
};

const removeTask = () => {
  let inputValue = inputField.value;
  for (let i = 0; i < listItems.length; i++) {
    if (inputValue === listItems[i]) {
      listItems.pop();
      console.log(listItems);
    }
  }
};

export default addTask;
