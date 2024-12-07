import { View } from "./view.js";
import { HabitManager, Habit, DateNavigator } from "./model.js";

class HabitController {
  constructor(habitManager, view, dateNavigator) {
    this.habitManager = habitManager;
    this.view = view;
    this.dateNavigator = dateNavigator;
  }

  init() {
    this.view.renderTable(this.habitManager.habits);
    this.view.renderDates(this.dateNavigator.getDates());
  }

  bindEvents() {
    this.view.habitForm.addEventListener("submit", (event) => {
      this.habitManager.addHabit(
        this.view.habitInput.value,
        this.view.habitGoal.value
      );
      this.view.renderTable(this.habitManager.habits);
      event.preventDefault();
    });

    this.view.tableBody.addEventListener("click", (event) => {
      if (event.target.classList.contains("deleteBtn")) {
        const row = event.target.closest("tr");
        const index = Array.from(tableBody.children).indexOf(row);
        this.habitManager.deleteHabit(index);
        this.view.renderTable(this.habitManager.habits);
      }
    });

    this.view.tableBody.addEventListener("click", (event) => {
      if (event.target.type === "checkbox") {
        const habitIndex = event.target.dataset.habitIndex
        const date = event.target.dataset.date
        this.habitManager.updateDatesArray(habitIndex, date);
      }
      this.view.renderTable(this.habitManager.habits);


    });

    this.view.dateNavigator.addEventListener('click', (event) => {
      if (event.target.id === 'forwardBtn') {
        this.view.renderDates(this.dateNavigator.goForward())
        this.view.renderTable(this.habitManager.habits);
      }
      if (event.target.id === 'backBtn') {
        this.view.renderDates(this.dateNavigator.goBack())
        this.view.renderTable(this.habitManager.habits);
      }
    })  
  }
}

const habitManager = new HabitManager();
const dateNavigator = new DateNavigator();
const view = new View(dateNavigator.getDates());
const habitController = new HabitController(habitManager, view, dateNavigator);
habitController.init();
habitController.bindEvents();
