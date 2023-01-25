import mockStorage from "../__mocks__/localStorage.js";
import addNewTask from "../addItem.js";
import removeTask from "../deleteTask.js";

test("Add one new item to the list", () => {
  document.body.innerHTML =
    "<div>" + '<ul id="list"><li>Sleeping</li></ul>' + "</div>";
  addNewTask();
  const list = document.querySelectorAll("#list li");
  expect(list).toHaveLength(1);
  mockStorage();
});
// test("Remove one new item to the list", () => {
//   document.body.innerHTML = "<div>" + '<ul id="list"><li></li></ul>' + "</div>";
//   removeTask();
//   const list = document.querySelectorAll("#list li");
//   expect(list).toHaveLength(-1);
//   mockStorage();
// });

describe("removeTask", () => {
  let taskList;
  let event;
  beforeEach(() => {
    taskList = [
      { task: "Task 1", id: 1 },
      { task: "Task 2", id: 2 },
      { task: "Task 3", id: 3 },
    ];
    event = {
      target: {
        closest: jest.fn(() => {
          return {
            previousElementSibling: {
              value: "Task 2",
            },
          };
        }),
      },
    };
  });

  test("removes task from task list", () => {
    removeTask(taskList, event);
    expect(taskList).toEqual([
      { task: "Task 1", id: 1 },
      { task: "Task 3", id: 2 },
    ]);
  });
});
