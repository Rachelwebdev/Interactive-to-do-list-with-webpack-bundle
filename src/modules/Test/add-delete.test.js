import { addNewTask } from "../addItem.js";
import { removeTask } from "../deleteTask.js";
import { ListItems } from "../addItem.js";

// Testing Add Task Function
describe("add new task to list", () => {
  const testValue = [
    { task: "This is the first item", completed: false, id: 1 },
  ];
  test("check if addItem function exists", () => {
    expect(addNewTask).toBeDefined();
  });
  test("check if array is the same as test value description", () => {
    expect(addNewTask("This is the first item")).toEqual(testValue.task);
  });
  test("check if array is the same as test value completed", () => {
    expect(addNewTask("This is the first item")).toEqual(testValue.completed);
  });
  test("check if array is the same as test value id", () => {
    expect(addNewTask("This is the first item")).toEqual(testValue.id);
  });
});
