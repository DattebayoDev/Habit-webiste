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
  const tableHeaderRows = document.getElementById("tableHeaderRow");
  const headers = Array.from(tableHeaderRows.getElementsByTagName('th'),(th) => th.textContent)

  tableBody.innerHTML = " ";

  for (mainCounter = 0; mainCounter < habitData.length; mainCounter++) {
    let habit = habitData[mainCounter];
  
    let datesArray = Object.values(habit.dates)
    
    let row = document.createElement("tr");
    for (header of headers) {

      if (header === "Habit's") {
        createLabelCell(row, habit.name);
      } else if (parseInt(header) === past) {
        createInputCell(row, past, 0, datesArray, mainCounter);
      } else if (parseInt(header) === present) {
        createInputCell(row, present, 1, datesArray, mainCounter);
      } else if (parseInt(header) === future) {
        createInputCell(row, future, 2, datesArray, mainCounter);
      } else if (header === "Goal") {
        createLabelCell(row, habit.goal);
      }
    }

    tableBody.appendChild(row);
  }
  // x = tableBody.lastChild.lastChild
  // console.log(x)
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

// function createInputCell(row, date, count, array) {
//   //console.log("row", row, "date", date, "count", count,"array", array,"n",  n)
//   let inputTd = document.createElement("td");
//   let input = document.createElement("input");
//   input.className = "checkBox";
//   input.type = "checkbox";
//   input.dataset.habitIndex = n;
//   input.dataset.checkBoxIndex = count; // unique
//   if (array.includes(date)){
//     input.checked = true
//   } 

//   inputTd.appendChild(input);
//   console.log("inputTd", inputTd)

//   row.appendChild(inputTd);
// }

function createInputCell(row, date, count, array, n) {
  let inputTd = document.createElement("td");
  let input = document.createElement("input");
  input.className = "checkBox";
  input.type = "checkbox";
  input.dataset.habitIndex = n;
  input.dataset.checkBoxIndex = count; // unique
  if (array.includes(date)) {
    input.checked = true;
  }
  inputTd.appendChild(input);
  row.appendChild(inputTd);
  x = row.lastChild
  y = x.lastChild
  console.log(y.dataset.checkBoxIndex)
}

function createLabelCell(row, name) {
  let label = document.createElement("td"); // creates a new data cell
  label.textContent = name;
  row.appendChild(label);
}





