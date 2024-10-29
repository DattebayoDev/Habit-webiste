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
}

function displayTable() {
  let tableHeaderRows = document.getElementById("tableHeaderRow").textContent;
  tableBody.innerHTML = " ";

  cleanTableHeader(tableHeaderRows);

  for (n = 0; n < habitData.length; n++) {
    let habit = habitData[n];
  
    let datesArray = Object.values(habit.dates)
    
    
    let row = document.createElement("tr");

    for (header of x) {

      if (header === "Habit's") {
        createLabelCell(row, habit.name);
      } else if (parseInt(header) === past) {
        createInputCell(row, past, 0, datesArray);
      } else if (parseInt(header) === present) {
        createInputCell(row, present, 1, datesArray);
      } else if (parseInt(header) === future) {
        createInputCell(row, future, 2, datesArray);
      } else if (header === "Goal") {
        createLabelCell(row, habit.goal);
      }
    }

    tableBody.appendChild(row);
  }
}

function addCheckBoxListener() {
  let checkBoxes = document.querySelectorAll(".checkBox");
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", (event) => {
      habitIndex = checkBox.getAttribute("data-habit-index");
      checkBoxIndex = checkBox.getAttribute("data-check-box-index");
      const datesObj = [past, present, future];
      addDate(datesObj[checkBoxIndex]);
      localStorage.setItem("habitData", JSON.stringify(habitData));
    });
  });
}


function addDate(date) {
  habit = habitData[habitIndex];
  if (habit.dates.includes(date)) {
  } else {
    habit.dates.push(date);
  }
}

function customDate() {
  pastHeader.textContent = past;
  presentHeader.textContent = present;
  futureHeader.textContent = future;
}

function createInputCell(row, date, count, array) {
  let inputTd = document.createElement("td");
  let input = document.createElement("input");
  input.className = "checkBox";
  input.type = "checkbox";
  input.dataset.habitIndex = n;
  input.dataset.checkBoxIndex = count; // unique
  if (array.includes(date)){
    input.checked = true
  } 

  inputTd.appendChild(input);
  row.appendChild(inputTd);
}

function createLabelCell(row, name) {
  let label = document.createElement("td"); // creates a new data cell
  label.textContent = name;
  row.appendChild(label);
}

function cleanTableHeader(obj) {
  x = obj.split("\n");
  x.splice(0, 1);
  x.splice(-1, 1);

  for (let i = 0; i < x.length; i++) {
    x[i] = x[i].trim();
  }
}
