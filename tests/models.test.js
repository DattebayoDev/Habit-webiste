const { Habit } = require("../src/model.js");
const { HabitManager } = require("../src/model.js");

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

describe("Habit Manager", () => {
  let testManager;
  
  beforeEach(() => {
    testManager = new HabitManager();
    testManager.habits = []
  });

  test("Add a habit", () => {
    testManager.addHabit("Habit", 1);
    expect(testManager.habits[0]).toEqual({ name: "Habit", goal: 1, dates: [] });
  });

  test("Delete a habit", () => {
    testManager.addHabit("Running", 1);
    testManager.addHabit("Reading", 2);
    testManager.addHabit("Meditation", 3);
    length = testManager.habits.length
    console.log(testManager.habits.length)
    testManager.deleteHabit(-1);
    expect(testManager.habits[0]).toEqual({ name: "Reading", goal: 2, dates: [] });
    expect(testManager.habits.length).toEqual(length - 1)
  })
});


//What to test
// What are the critical features that would break your application if they failed?
// What assumptions does your code make about the data?
// What values are actually possible in your UI?
