class Habit {
  constructor(name, goal) {
    this.name = name;
    this.goal = goal;
  }
}
window.addEventListener("load", (event) => {
  displayTable()
  customDate()  
})
//localStorage.clear()
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
let pastHeader = document.getElementById("past")
let presentHeader = document.getElementById("present")
let futureHeader = document.getElementById("future")


let habitData = JSON.parse(localStorage.getItem("habitData")) || [];
habitBtn.addEventListener("click", addHabit);
function addHabit() {
  let habit = new Habit(habitInput.value, habitGoal.value);
  habitData.push(habit);
  localStorage.setItem('habitData', JSON.stringify(habitData))
  displayTable();
}

function customDate() {
  let today = new Date
  let present = (today.getDate())
  let past = present - 1
  let future = present + 1
  pastHeader.textContent = past
  presentHeader.textContent = present
  futureHeader.textContent = future

}




function displayTable() {

  tableBody.innerHTML= " "

  for (n = 0; n < habitData.length; n++) {
    let habit = habitData[n]
    row = `<tr> 
    <td> ${habit.name} </td>
    <td> <input type="checkbox"></td>
    <td> <input type="checkbox"></td>
    <td> <input type="checkbox"> </td>
    <td> ${habit.goal} </td>
     <tr> `

    tableBody.innerHTML += row
  }



}

