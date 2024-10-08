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

let habit_data = [];

habitBtn.addEventListener("click", addHabit);
function addHabit() {
  let habit = new Habit(habitInput.value, habitGoal.value);
  habit_data.push(habit);
  console.log(habit_data)
  displayTable();
}

function displayTable() {

  for (let index = 0; index < habit_data.length; index++) {
    let habit = habit_data[index]
    console.log(habit.name)
    console.log(habit.goal)
    let row = `<tr> 
    <td data-index="${index}" data-field="name"> ${habit.name} </td>  
    <td data-index="${index}" data-field="goal"> ${habit.goal} </td>
    </tr> `

    tableBody.innerHTML += row
    console.log("This is index: "{index})
    let nameCell = tableBody.rows[index].cells[0]
    let goalCell = tableBody.rows[index].cells[1]
    console.log(nameCell.dataset, goalCell.dataset)


  }



}

