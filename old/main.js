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
  displayTable(customDate());
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

let tableBody = document.getElementById("tableBody");

let habitData = JSON.parse(localStorage.getItem("habitData")) || [];
console.log(habitData);

addBtn.addEventListener("click", addHabit);
function addHabit() {
  let habit = new Habit(habitInput.value, habitGoal.value, []);
  habitData.push(habit);
  localStorage.setItem("habitData", JSON.stringify(habitData));
  displayTable();
  addCheckBoxListener();
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
    console.log("Dates Array", datesArray)
    const row = document.createElement("tr");
    populateRowCells(headers, datesArray, row, habit);
    tableBody.appendChild(row);
  }
}

function populateRowCells(headers, datesArray, row, habit) {
  let past = customDate()[0]
  let present = customDate()[1]
  let future = customDate()[2]

  const dateConfig = {
    [past]: 0,
    [present]: 1,
    [future]: 2,
  };
  console.log("past", past, "present", present, "future", future)
  console.log("Date Config",dateConfig)
  console.log("headers", headers.filter((header) => parseInt(header)))
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
    } else if (header === "Completion") {
      createProgressTdCell(row);
    }
  }
}

function addCheckBoxListener() {
  let checkBoxes = document.querySelectorAll(".checkBox");
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", (event) => {
      habitIndex = checkBox.getAttribute("data-habit-index");
      checkBoxIndex = checkBox.getAttribute("data-check-box-index");
      const datesObj = customDate();
      updateCheckbox(datesObj[checkBoxIndex], habitIndex, event.target);
      localStorage.setItem("habitData", JSON.stringify(habitData));
    });
  }); 
}
// updates the checkboxes based on if it is clicked or not
function updateCheckbox(date, habitIndex, element) {
  habit = habitData[habitIndex];
  if (element.checked) {
    habit.dates.push(date);
    updatingPoints(habit.dates);
  } else {
    habit.dates = habit.dates.filter((element) => element !== date);
    updatingPoints(habit.dates)
  }
  localStorage.setItem("HabitData", JSON.stringify(habitData));
}
function customDate() {
  let today = new Date();
  let present = today.getDate();
  let past = present - 1;
  let future = present + 1;
  pastHeader.textContent = past;
  presentHeader.textContent = present;
  futureHeader.textContent = future;
  return [past, present, future]
}

function createInputCell(row, date, count, array, n) {
  let inputTd = document.createElement("td");
  let input = document.createElement("input");
  input.className = "checkBox";
  input.type = "checkbox";
  input.dataset.habitIndex = n;
  input.dataset.checkBoxIndex = count; // unique
  console.log("Input", input, "Date", date)
  isChecked(input, date, array);
  inputTd.appendChild(input);
  row.appendChild(inputTd);
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

// progress tracking logic

function createProgressTdCell(row) {
  const progressDataCell = document.createElement("td");
  progressDataCell.id = "progressDataCell";
  progressDataCell.textContent = 0;
  row.appendChild(progressDataCell);
}

function updatingPoints(datesArray) {
  const progressDataCell = document.getElementById("progressDataCell");
  progressDataCell.textContent = "";
  let counter = 0;
  for (date of datesArray){
    counter += 1
  }
  progressDataCell.textContent = counter;
  return counter
}

function goingBack(customDate){
  let past = customDate[0]
  let present = customDate[1]
  let future = customDate[2]
  const backBtn = document.getElementById("backBtn")
  backBtn.addEventListener('click', () => {
    present -= 1;  
    past = present - 1;
    future = present + 1;
    presentHeader.textContent = present;
    pastHeader.textContent = past;
    futureHeader.textContent = future;
    console.log("----------------------")
    displayTable()

  })
  return present
}
goingBack(customDate())


function backDate(customDate) {
  // console.log(customDate, "1")
  customDate = customDate.map((date) => parseInt(date) - 1)
  // console.log(customDate, "2")
  return customDate

}
backDate(customDate())