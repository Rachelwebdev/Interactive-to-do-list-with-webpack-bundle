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
    task: "Continue building todo list project",
    completed: false,
    id: 0,
  },
  {
    task: "Weekly meal prep",
    completed: true,
    id: 1,
  },
  {
    task: "Take an evening walk",
    completed: true,
    id: 1,
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("myToDoList", JSON.stringify(myToDoList));
};

export const getLocalStorage = () => {
  const taskArray = JSON.parse(localStorage.getItem("myToDoList")) || [];
};
