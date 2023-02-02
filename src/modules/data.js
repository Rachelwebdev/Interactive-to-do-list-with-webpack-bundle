// export const updateLocalStorage = (toDoListArray) => {
//   localStorage.setItem("toDoList", JSON.stringify(toDoListArray));
// };

// export const getLocalStorage = () => {
//   const localStorageData = JSON.parse(localStorage.getItem("toDoList")) || [];
//   const toDoListArray = localStorageData;
//   return toDoListArray;
// };

const myToDoList = [
  {
    description: "Continue building todo list project",
    completed: false,
    id: 0,
  },
  {
    description: "Weekly meal prep",
    completed: true,
    id: 1,
  },
  {
    description: "Take an evening walk",
    completed: true,
    id: 2,
  },
  {
    description: "Join zoom meeting with Elizabeth",
    completed: true,
    id: 3,
  },
];

export const setLocalStorage = (listArray) => {
  localStorage.setItem("listArray", JSON.stringify(listArray));
};

export const getLocalStorage = () => {
  const taskArray = JSON.parse(localStorage.getItem("listArray")) || [];
  return taskArray;
};

setLocalStorage();
