class Habit {
  constructor(name, goal, dates) {
    this.name = name;
    this.goal = goal;
    this.dates = dates;
  }
}

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
console.log(habitData)
addBtn.addEventListener("click", addHabit);
function addHabit() {
  let habit = new Habit(habitInput.value, habitGoal.value, []);
  habitData.push(habit);
  localStorage.setItem("habitData", JSON.stringify(habitData));
  displayTable();
}

function displayTable() {
  tableBody.innerHTML = " ";

  for (n = 0; n < habitData.length; n++) {
    let habit = habitData[n];
    row = `<tr> 
    <td> ${habit.name} </td>
    <td> <input class="checkBox" data-habit-index= ${n} id="past" ${ habit.dates.includes(past) ? "checked" : ""   }  type="checkbox"></td>
    <td> <input class="checkBox" data-habit-index= ${n} id="present" ${ habit.dates.includes(present) ? "checked" : ""   } type="checkbox"></td>
    <td> <input class="checkBox" data-habit-index= ${n} id="future" ${ habit.dates.includes(future) ? "checked" : ""   } type="checkbox"> </td>
    <td> ${habit.goal} </td>
    `;

  tableBody.innerHTML += row;
  }
}

 
function addCheckBoxListener() {
  let checkBoxes = document.querySelectorAll(".checkBox");
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", (event) => {
      habitIndex = checkBox.getAttribute("data-habit-index");
      switch (checkBox.id) {
        case "past":
          habit = habitData[habitIndex];
          habit.dates.push(past);
          break;
        case "present":
          habit = habitData[habitIndex];
          habit.dates.push(present);
          break;
        case "future":
          habit = habitData[habitIndex];
          habit.dates.push(future);
          break;
      }
      localStorage.setItem("habitData", JSON.stringify(habitData));
    });
  });
}

function customDate() {
  pastHeader.textContent = past;
  presentHeader.textContent = present;
  futureHeader.textContent = future;
}

// console.log("working")
// console.log("past");
// console.log("HabitData", habitData)
// habit = habitData[0]
// console.log("Habit", habit)
// console.log("Habit Dates", habit.dates)
// habit.dates.push(past)
// console.log("Habit Dates", habit.dates)
