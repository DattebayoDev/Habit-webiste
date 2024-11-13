class Habit {
  constructor(name, goal, dates) {
    this.name = name;
    this.goal = goal;
    this.dates = dates;
  }
}
const test = "working";
window.addEventListener("DOMContentLoaded", () => {
  customDate();
  displayTable();
  addCheckBoxListener();
});

//localStorage.clear()
let habitForm = document
  .getElementById("habitForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
  });

let habitInput = document.getElementById("habitInput");
let habitGoal = document.getElementById("habitGoal");
let addBtn = document.getElementById("addBtn");
let pastHeader = document.getElementById("past");
let presentHeader = document.getElementById("present");
let futureHeader = document.getElementById("future");
let checkBox = document.getElementById("checkBox");
let today = new Date();
let present = today.getDate();
let past = present - 1;
let future = present + 1;

let tableBody = document.getElementById("tableBody");

let habitData = JSON.parse(localStorage.getItem("habitData")) || [];
console.log(habitData);

addBtn.addEventListener("click", addHabit);
function addHabit() {
  let habit = new Habit(habitInput.value, habitGoal.value, []);
  habitData.push(habit);
  localStorage.setItem("habitData", JSON.stringify(habitData));
  displayTable();
  addCheckBoxListener()
}

function displayTable() {
  const tableHeaderRows = document.getElementById("tableHeaderRow");
  const headers = Array.from(
    tableHeaderRows.getElementsByTagName("th"),
    (th) => th.textContent
  );
  tableBody.innerHTML = " ";
  generateHabitRow(headers);
}

function generateHabitRow(headers) {
  for (mainCounter = 0; mainCounter < habitData.length; mainCounter++) {
    const habit = habitData[mainCounter];
    const datesArray = Object.values(habit.dates);
    const row = document.createElement("tr");
    populateRowCells(headers, datesArray, row, habit);
    tableBody.appendChild(row);
  }
}

function populateRowCells(headers, datesArray, row, habit) {
  const dateConfig = {
    [past]: 0,
    [present]: 1,
    [future]: 2,
  };

  for (header of headers) {
    let headerNum = parseInt(header);
    if (Object.hasOwn(dateConfig, headerNum)) {
      createInputCell(
        row,
        headerNum,
        dateConfig[headerNum],
        datesArray,
        mainCounter
      );
    } else if (header === "Habit's") {
      createLabelCell(row, habit.name);
    } else if (header === "Actions") {
      createDeleteDataCell(row, mainCounter, habitData);
    } else if (header === "Goal") {
      createLabelCell(row, habit.goal);
    }
  }
}

function addCheckBoxListener() {
  let checkBoxes = document.querySelectorAll(".checkBox");
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", (event) => {
      habitIndex = checkBox.getAttribute("data-habit-index");
      checkBoxIndex = checkBox.getAttribute("data-check-box-index");
      const datesObj = [past, present, future];
      updateCheckbox(datesObj[checkBoxIndex], habitIndex, event.target);
      localStorage.setItem("habitData", JSON.stringify(habitData));
    });
  });
}
// updates the checkboxes based on if it is clicked or not
function updateCheckbox(date, habitIndex, element) {
  habit = habitData[habitIndex];
  if (element.checked){
    console.log("It is checked")
    habit.dates.push(date)
  } else {
    console.log("It is unchecked removing", date)
    habit.dates = habit.dates.filter((element) => element !== date)
  }
  localStorage.setItem('HabitData', JSON.stringify(habitData))
}

function customDate() {
  pastHeader.textContent = past;
  presentHeader.textContent = present;
  futureHeader.textContent = future;
}

function createInputCell(row, date, count, array, n) {
  let inputTd = document.createElement("td");
  let input = document.createElement("input");
  input.className = "checkBox";
  input.type = "checkbox";
  input.dataset.habitIndex = n;
  input.dataset.checkBoxIndex = count; // unique
  isChecked(input, date, array);
  inputTd.appendChild(input);
  row.appendChild(inputTd);
  x = row.lastChild;
  y = x.lastChild;
}

function createLabelCell(row, name) {
  let label = document.createElement("td"); // creates a new data cell
  label.textContent = name;
  row.appendChild(label);
}

function createDeleteDataCell(row, mainCounter, habitArray) {
  // console.log("createDeleteDataCell working");
  const deleteTd = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () =>
    deleteLogic(mainCounter, habitArray)
  );
  deleteTd.appendChild(deleteBtn);
  row.appendChild(deleteTd);
}

function deleteLogic(mainCounter, habitArray) {
  // console.log("DELETE", habitArray[mainCounter])
  habitArray.splice(mainCounter, 1);
  console.log(habitArray);
  localStorage.setItem("habitData", JSON.stringify(habitArray));
  displayTable();
}
// check to see if the date is within the array
function isChecked(input, date, datesArray) { 
  if (datesArray.includes(date)) {
    input.checked = true;
  } else {
    input.checked = false;
  }
}
