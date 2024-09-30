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

 
habitBtn.addEventListener('click', addHabit) 
function addHabit() {
    let habit = new Habit(habitInput.value, habitGoal.value)
    habit_data.push(habit)

    displayTable()
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
    tableBody.innerHTML = " ";

    let count = 0
    while (count <= habit_data.length) {
        let habit = habit_data[count]
        let row = `<tr>
                    <td>${habit.name} </td>
                    <td>${habit.goal} </td>
                </tr>`; 
        tableBody.innerHTML += row;
        count += 1

    }
    count += 1
}


