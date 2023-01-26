import modifyTask from "../editTask.js";
import { addNewTask } from "../addItem.js";
import { ListItems } from "../addItem.js";

describe("test for edit task", () => {
  it("modifyTask", () => {
    addNewTask("This is a new task");
    addNewTask("This is another task");
    addNewTask("This is the third task");
    const edit = modifyTask(1, "This task has been modified");
    expect(edit).toEqual(ListItems);
  });
  it("updatetaskIndex", () => {
    const edit = modifyTask(2, "This test checks modified tasks");
    expect(edit).toHaveLength(3);
  });
});
