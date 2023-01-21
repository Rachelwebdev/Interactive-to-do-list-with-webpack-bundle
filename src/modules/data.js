export const updateLocalStorage = (toDoListArray) => {
  localStorage.setItem("toDoList", JSON.stringify(toDoListArray));
};

export const getLocalStorage = () => {
  const localStorageData = JSON.parse(localStorage.getItem("toDoList")) || [];
  let toDoListArray = localStorageData;
  return toDoListArray;
};
