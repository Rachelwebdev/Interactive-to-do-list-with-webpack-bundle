const removeCompleted = (taskList) => {
  taskList = taskList.filter((task) => !task.completed);
  taskList.forEach((task, idx) => {
    task.id = idx + 1;
  });
  return taskList;
};

export default removeCompleted;
