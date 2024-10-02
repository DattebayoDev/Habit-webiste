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

  displayTable();
}
// function displayTable() {
//     habit_data.forEach( habit => {
//         let row = `<tr>
//             <td>${habit.name} </td>
//             <td>${habit.goal} </td>
//         </tr>`;
//         tableBody.innerHTML += row;
//     })

// }

function displayTable() {
  for (count = 0; count <= habit_data.length; count ++) {
      let habit = habit_data[count]
      let row = `<tr>
                  <td>${habit.name} </td>
                  <td>${habit.goal} </td>
              </tr>`;
      tableBody.innerHTML += row;
  }
 

let newHabit = habit_data[habit_data.length - 1]; // Get the last added habit

let newRow = `<tr>
                <td>${newHabit.name}</td>
                <td>${newHabit.goal}</td>
             </tr>`;

// Append the new row without duplicating previous ones
tableBody.innerHTML += newRow;
}