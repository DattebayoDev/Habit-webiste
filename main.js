let habitForm = document.getElementById("habitForm");
let habitName = document.getElementById("habitName").value;
let habitGoal = document.getElementById("habitGoal").value;
let displayData = document.getElementById("displayData")

habitForm.onsubmit = (event) => {
  event.preventDefault();
  displayData.textContent = habitName
};

displayHabitData.textContent = habitName