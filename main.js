class Habit {
    constructor(name, goal) {
        this.name = name;
        this.goal = goal;
    }
}

let habitForm = document.getElementById('habitForm').addEventListener('submit', (event) => { event.preventDefault()})
let habitInput = document.getElementById('habitInput')
let habitGoal = document.getElementById('habitGoal');
let habitBtn = document.getElementById('habitBtn');
let tableBody = document.getElementById('tableBody')

let habit_data = [ ]
 
console.log('Before' + habit_data )
function reset() {
    habitInput.value= " "
    habitGoal.value = 0
}
console.log(tableBody.textContent)
 
habitBtn.addEventListener('click', addHabit) 
function addHabit() {
    let habit = new Habit(habitInput.value, habitGoal.value)
    habit_data.push(habit)
    displayTable()
}
function displayTable() {
    tableBody.innerHTML = " "
    habit_data.forEach( habit => {
        let row = `<tr>
            <td>${habit.name} </td>
            <td>${habit.goal} </td>
        </tr>`;
        tableBody.innerHTML += row;
    })

}

console.log(habit_data)




