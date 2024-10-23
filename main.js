class Habit {
  constructor(name, goal) {
    this.name = name;
    this.goal = goal;
  }
}

//localStorage.clear()
let habitForm = document
  .getElementById("habitForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
  });

let habitInput = document.getElementById("habitInput");
let habitGoal = document.getElementById("habitGoal");
let addBtn = document.getElementById("addBtn");
let tableBody = document.getElementById("tableBody");
let pastHeader = document.getElementById("past");
let presentHeader = document.getElementById("present");
let futureHeader = document.getElementById("future");
let checkBox = document.getElementById("checkBox");

window.addEventListener("DOMContentLoaded", () => {
  displayTable();
  customDate();
  addCheckBoxListener();
});

let habitData = JSON.parse(localStorage.getItem("habitData")) || [];

addBtn.addEventListener("click", addHabit);
function addHabit() {
  let habit = new Habit(habitInput.value, habitGoal.value);
  habitData.push(habit);
  localStorage.setItem("habitData", JSON.stringify(habitData));
  displayTable();
}

function customDate() {
  let today = new Date();
  let present = today.getDate();
  let past = present - 1;
  let future = present + 1;
  pastHeader.textContent = past;
  presentHeader.textContent = present;
  futureHeader.textContent = future;
}

function displayTable() {
  tableBody.innerHTML = " ";

  for (n = 0; n < habitData.length; n++) {
    let habit = habitData[n];
    row = `<tr> 
    <td> ${habit.name} </td>
    <td> <input class="checkBox" type="checkbox"></td>
    <td> <input class="checkBox" type="checkbox"></td>
    <td> <input class="checkBox" type="checkbox"> </td>
    <td> ${habit.goal} </td>
     <tr> `;

    tableBody.innerHTML += row;
  }
}

function addCheckBoxListener() {
  addHabit()
  let checkBoxes = document.querySelectorAll(".checkBox");
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", (event) => {
      if (checkBox.checked) {
        habit.dates = []
      }
      console.log(habitData)
    });
  });
}
