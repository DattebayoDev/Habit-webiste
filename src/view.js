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
      (header) => header.textContent
    );
    this.pastHeader = document.getElementById("past");
    this.presentHeader = document.getElementById("present");
    this.futureHeader = document.getElementById("future");
  }

  renderTable(habitData) {
    this.tableBody.textContent = "";
    for (let index = 0; index < habitData.length; index++) {
      const row = this.tableBody.insertRow(index);
      this.renderRowCells(this.tableHeaders, row, habitData[index]);
      //   this.renderHabitName(row, habitData[index])
    }
  }

  renderRowCells(headers, row, habit) {
    for (let index = 0; index < headers.length; index++) {
      let cell = row.insertCell(index);
      this.renderHabitName(index, cell, habit);
    }
  }

  renderHabitName(index, cell, habit) {
    switch (index) {
      case 0:
        const habitName = habit.name;
        cell.append(habitName);
        break;
      case 1:
        const habitAction = "n/a";
        cell.append(habitAction);
        break;
      case 2:
        const habitDatePast = habit.dates[0];
        cell.append(habitDatePast);
        break;
      case 3:
        const habitDatePresent = habit.dates[1];
        cell.append(habitDatePresent);
        break;
      case 4:
        const habitDateFuture = habit.dates[2];
        cell.append(habitDateFuture);
        break;
      case 5:
        const habitGoal = habit.goal;
        cell.append(habitGoal);
        break;
      case 6:
        const habitCompletion = "n/a";
        cell.append(habitCompletion);
        break;
    }
  }
}

testData = [
  { name: "Running", goal: 1, dates: [1, 2, 3] },
  { name: "Reading", goal: 2, dates: [1, 2, 3] },
  { name: "Swimming", goal: 3, dates: [1, 2, 3] },
  { name: "Dancing", goal: 4, dates: [1, 2, 3] },
  { name: "Climbing", goal: 5, dates: [1, 2, 3] },
];
const view = new View();
view.renderTable(testData);
