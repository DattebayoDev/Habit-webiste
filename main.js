class Habit {
  constructor(name, goal) {
    this.name = name;
    this.goal = goal;
  }
}

//localStorage.clear()
let habitForm = document.getElementById("habitForm").addEventListener("submit", (event) => {event.preventDefault(); });

let habitInput = document.getElementById("habitInput");
let habitGoal = document.getElementById("habitGoal");
let habitBtn = document.getElementById("habitBtn");
let tableBody = document.getElementById("tableBody");
let saveBtn = document.getElementById("saveBtn")
let pastHeader = document.getElementById("past")
let presentHeader = document.getElementById("present")
let futureHeader = document.getElementById("future")
let checkBox = document.getElementById("checkBox")

window.addEventListener("DOMContentLoaded", () => {
  displayTable()
  customDate()  
  addCheckboxListeners()
  // setTimeout(() => {
  //   console.log('Attempting to simulate clicks...');
  //   document.querySelectorAll('.checkBox').forEach((cb, i) => {
  //     console.log(`Simulating click on checkbox ${i + 1}`);
  //     cb.click();
  //   });
  // }, 1000); // Wait 1 second before simulating clicks
})



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
    <td> <input class="checkBox" type="checkbox"></td>
    <td> <input class="checkBox" type="checkbox"></td>
    <td> <input class="checkBox" type="checkbox"> </td>
    <td> ${habit.goal} </td>
     <tr> `

    tableBody.innerHTML += row
  }



}

function addCheckboxListeners(){
  let checkBoxes = document.querySelectorAll(".checkBox")
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener("click", (event) => {
      console.log('CLICKED')
    })
  })
}



