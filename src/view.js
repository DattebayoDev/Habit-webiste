class View {
  constructor() {
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

  renderTable(habitData) {
    this.tableBody.textContent = "";
    for (let index = 0; index < habitData.length; index++) {
      const habit = habitData[index];
      const habitIndex = habitData.indexOf(habit);
      const row = this.tableBody.insertRow(index);
      this.renderRowCells(this.tableHeaders, row, habit, habitIndex);
    }
  }

  renderDates(dates) {
    console.log(dates)
    this.pastHeader.textContent = dates.past;
    this.presentHeader.textContent = dates.present;
    this.futureHeader.textContent = dates.future;
  }

  renderRowCells(headers, row, habit, habitIndex) {
    for (let index = 0; index < headers.length; index++) {
      let cell = row.insertCell(index);
      this.renderCell(index, cell, habit, habitIndex);
    }
  }

  renderCell(index, cell, habit, habitIndex) {
    const cellTypes = {
      0: () => habit.name,
      1: () => this.renderDeleteButton(habitIndex),
      2: () => this.renderCheckbox(index),
      3: () => this.renderCheckbox(index),
      4: () => this.renderCheckbox(index),
      5: () => habit.goal,
      6: () => "n/a",
    };

    const content = cellTypes[index]();
    cell.append(content);
  }

  renderDeleteButton(habitIndex) {
    const btn = document.createElement("button");
    btn.classList.add("deleteBtn");
    btn.dataset.habitIndex = habitIndex;
    btn.textContent = "Delete";
    return btn;
  }

  renderCheckbox(index) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.habitIndex = index;
    this.checkboxEvent(checkbox);
    return checkbox;
  }

  checkboxEvent(checkbox) {
    checkbox.addEventListener("click", () => {});
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


