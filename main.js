class Habit {
  constructor(name, goal) {
    this.name = name;
    this.goal = goal;
  }
}

let habitForm = document
  .getElementById("habitForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
  });
let habitInput = document.getElementById("habitInput");
let habitGoal = document.getElementById("habitGoal");
let habitBtn = document.getElementById("habitBtn");
let tableBody = document.getElementById("tableBody");
let saveBtn = document.getElementById("saveBtn")

let habitData = localStorage.getItem("habitData") || [];
habitBtn.addEventListener("click", addHabit);
function addHabit() {
  let habit = new Habit(habitInput.value, habitGoal.value);
  habitData.push(habit);
  displayTable();
}


saveBtn.addEventListener("click", saveHabit);
function saveHabit() {
  let habit = new Habit(habitInput.value, habitGoal.value)
  habitData.push(habit)
  localStorage.setItem("habitData", JSON.stringify(habitData))

}

function displayTable() {

  // for (let index = 0; index < habit_data.length; index++) {
  //   let habit = habit_data[index]
  //   console.log(habit.name)
  //   console.log(habit.goal)
  //   let row = `<tr> 
  //   <td data-index="${index}" data-field="name"> ${habit.name} </td>  
  //   <td data-index="${index}" data-field="goal"> ${habit.goal} </td>
  //   </tr> `

  //   tableBody.innerHTML += row
  // }

  

}

