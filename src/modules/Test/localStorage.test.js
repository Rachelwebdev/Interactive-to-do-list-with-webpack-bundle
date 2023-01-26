import { updateLocalStorage, getLocalStorage } from "../data.js";

import { addNewTask } from "../addItem.js";

import { ListItems } from "../addItem.js";

describe("local storage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  addNewTask("Added a new Task");
  test("check if data is stored in local storage", () => {
    updateLocalStorage(ListItems);
    expect(localStorage.getItem("toDoList")).toEqual(JSON.stringify(ListItems));
  });
});
