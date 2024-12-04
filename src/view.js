class View {
  constructor(dates) {
    this.dates = dates;
    this.habitForm = document.getElementById("habitForm");
    this.habitInput = document.getElementById("habitInput");
    this.habitGoal = document.getElementById("habitGoal");
    this.addBtn = document.getElementById("addBtn");
    this.tableBody = document.getElementById("tableBody");

    this.tableHeaderRow = document.querySelector("thead");
    this.tableHeaders = Array.from(
      this.tableHeaderRow.querySelectorAll("th"),
      (header) => header
    );

    this.pastHeader = document.getElementById("past");
    this.presentHeader = document.getElementById("present");
    this.futureHeader = document.getElementById("future");
  }

  renderDates(dates) {
    this.pastHeader.textContent = dates.past;
    this.presentHeader.textContent = dates.present;
    this.futureHeader.textContent = dates.future;
  }
  renderTable(habitData) {
    this.tableBody.textContent = "";
    for (let index = 0; index < habitData.length; index++) {
      const habit = habitData[index];
      const row = this.tableBody.insertRow(index);
      this.renderRowCells(row, habit, index);
    }
  }

  renderRowCells(row, habit, HabitIndex) {
    for (let index = 0; index < this.tableHeaders.length; index++) {
      let cell = row.insertCell(index);
      this.renderCell(index, HabitIndex, cell, habit);
    }
  }

  renderCell(index, HabitIndex, cell, habit) {
    const cellTypes = {
      0: () => habit.name,
      1: () => this.renderDeleteButton(),
      2: () => this.renderCheckbox(HabitIndex, index, habit),
      3: () => this.renderCheckbox(HabitIndex, index, habit),
      4: () => this.renderCheckbox(HabitIndex, index, habit),
      5: () => habit.goal,
      6: () => "n/a",
    };

    const content = cellTypes[index]();
    cell.append(content);
  }

  renderDeleteButton() {
    const btn = document.createElement("button");
    btn.classList.add("deleteBtn");
    btn.textContent = "Delete";
    return btn;
  }

  renderCheckbox(index, dateIndex, habit) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.habitIndex = index;
    checkbox.dataset.date =
      dateIndex === 2
        ? this.dates.past
        : dateIndex === 3
        ? this.dates.present
        : this.dates.future;
    checkbox.checked = habit.dates.includes(checkbox.dataset.date);
    return checkbox;
  }

  updateCheckbox(status, checkbox) {
    if (status) checkbox.checked = true;
  }
}

let testData = [
  { name: "Running", goal: 1, dates: [1, 2, 3] },
  { name: "Reading", goal: 2, dates: [1, 2, 3] },
  { name: "Swimming", goal: 3, dates: [1, 2, 3] },
  { name: "Dancing", goal: 4, dates: [1, 2, 3] },
  { name: "Climbing", goal: 5, dates: [1, 2, 3] },
];
// const view = new View();

export { View };
