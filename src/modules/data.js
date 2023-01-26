export const updateLocalStorage = (tasksArray) => {
  localStorage.setItem('toDoList', JSON.stringify(tasksArray));
};

export const getLocalStorage = () => {
  const localStorageData = JSON.parse(localStorage.getItem('toDoList')) || [];
  const tasksArray = localStorageData;
  return tasksArray;
};
