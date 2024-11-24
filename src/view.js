class View {
  constructor() {
    this.habitForm = document.getElementById("habitForm");
    this.habitInput = document.getElementById("habitInput");
    this.habitGoal = document.getElementById("habitGoal");
    this.addBtn = document.getElementById("addBtn");
    this.tableBody = document.getElementById("tableBody");
    this.tableHeaderRow = document.querySelector("thead")
    this.tableHeaders = Array.from(this.tableHeaderRow.querySelectorAll("th"), (header) => header.textContent).filter((header) => header.length > 0);
    this.pastHeader = document.getElementById("past");
    this.presentHeader = document.getElementById("present");
    this.futureHeader = document.getElementById("future");
  }

  renderTable() {
    
}






}


const view = new View()
view.renderTable()