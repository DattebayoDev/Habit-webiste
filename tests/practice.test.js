const { createLabelCell } = require("../tests.js");
const { createInputCell } = require("../tests.js");

describe("createLabelCell", () => {
  let row;
  beforeEach(() => {
    row = document.createElement("tr");
  });

  test("should create a new label cell for each name", () => {
    const names = ["Habit 1", "Habit 2", "Habit 3"];

    names.forEach((name) => {
      createLabelCell(row, name);

      const labelCell = row.lastChild;
      expect(labelCell.textContent).toBe(name);
    });
  });
});

describe("createInputCell", () => {
  let row;

  beforeEach(() => {
    row = document.createElement("tr");
  });

  test("should create an input cell for each count", () => {
    array = [1, 2, 3];
    date = 4;
    counts = [0, 1, 2];
    n = 0;

    counts.forEach((count) => {
      createInputCell(row, date, count, array, n);
    });

    const inputCell = row.lastChild;
    const input = inputCell.lastChild;
    expect(input.dataset.checkBoxIndex).toBe("2");
  });
});
