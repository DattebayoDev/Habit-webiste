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
      const row = this.tableBody.insertRow(index);
      this.renderRowCells(row, habit, index);
    }
  }

  renderDates(dates) {
    console.log(dates)
    this.pastHeader.textContent = dates.past;
    this.presentHeader.textContent = dates.present;
    this.futureHeader.textContent = dates.future;
  }

  renderRowCells(row, habit) {
    for (let index = 0; index < this.tableHeaders.length; index++) {
      let cell = row.insertCell(index);
      this.renderCell(index, cell, habit);
    }
  }

  renderCell(index, cell, habit) {
    const cellTypes = {
      0: () => habit.name,
      1: () => this.renderDeleteButton(),
      2: () => this.renderCheckbox(index, 0),
      3: () => this.renderCheckbox(index, 1),
      4: () => this.renderCheckbox(index, 2),
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

  renderCheckbox(index, dateIndex) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.habitIndex = index;
    return checkbox;
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


