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
      this.renderRowCells(this.tableHeaders, row, habit);
      this.renderCurrentDates(this.tableHeaders, habit, index);
    }
  }

  renderCurrentDates(headers, habit, index) {
    switch (index) {
      case 2:
        headers[index].textContent = habit.dates[0];
        break;
      case 3:
        headers[index].textContent = habit.dates[1];
        break;
      case 4:
        headers[index].textContent = habit.dates[2];
        break;
    }
  }

  
  renderRowCells(headers, row, habit) {
    for (let index = 0; index < headers.length; index++) {
      let cell = row.insertCell(index);
      this.renderCell(index, cell, habit);
    }
  }

  renderCell(index, cell, habit) {
    const cellTypes = {
        0: () => habit.name,
        1: () => this.renderDeleteButton(),
        2: () => this.renderCheckbox(index),
        3: () => this.renderCheckbox(index),
        4: () => this.renderCheckbox(index),
        5: () => habit.goal,
        6: () => "n/a"
      };
  
      const content = cellTypes[index]();
      cell.append(content);
    }

  renderDeleteButton() {
    const btn = document.createElement('button')
    btn.textContent = "Delete"
    return btn
  }

  renderCheckbox(index){
    const checkbox = document.createElement("input")
    checkbox.type = 'checkbox'
    checkbox.dataset.habitIndex = index
    this.checkboxEvent(checkbox)
    return checkbox
  }
  
  checkboxEvent(checkbox){
    checkbox.addEventListener('click', () => {
      console.log('working')
      console.log()
    })
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
