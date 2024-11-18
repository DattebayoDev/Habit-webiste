const { Habit } = require("../src/model.js");

describe("Habit", () => {
  let testHabit;

  beforeEach(() => {
    testHabit = new Habit("Exercise", 10);
  });

  test("Should create a habit with required properties name and goal  ", () => {
    expect(testHabit.name).toBe("Exercise");
    expect(testHabit.goal).toBe(10);
  });
});
