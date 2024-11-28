import { View } from "./view.js";
import { HabitManager, Habit } from "./model.js";

class HabitController {
  constructor(habitManager, view) {
    this.habitManager = habitManager;
    this.view = view;
  }

  init() {
    this.view.renderTable(this.habitManager.habits);
  }

  bindEvents() {
    habitForm.addEventListener("submit", (event) => {
      this.habitManager.addHabit(
        this.view.habitInput.value,
        this.view.habitGoal.value
      );
      this.view.renderTable(this.habitManager.habits);
      event.preventDefault();
    });
  }
}

const habitManager = new HabitManager();
const view = new View();
const habitController = new HabitController(habitManager, view);
habitController.init();
habitController.bindEvents();
