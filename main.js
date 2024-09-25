const table = document.getElementById('habitTable')
const habitForm = document.getElementById('habitForm')
const habitInput = document.getElementById('habitInput')
const mainRangeDisplay = document.createElement('span');
const habitPoint  = document.getElementById('habitPoint')
const addBtn = document.getElementById('addHabit')
const saveBtn = document.getElementById('saveBtn')
const cancelBtn = document.getElementById('cancelBtn')
const dateCells = document.querySelectorAll("#habitTable th[id='date']:not([rowspan])");

habitPoint.addEventListener('input', (event) => {
  mainRangeDisplay.textContent = event.target.value;
  habitPoint.insertAdjacentElement('afterend', mainRangeDisplay);
});

let habitData = (() => {
  const storedData = localStorage.getItem('habitData');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    return Array.isArray(parsedData) ? parsedData : [];
  } else {
    return []; // Start with an empty array if no valid data
  }
})();
if (habitData.length > 0) {
  habitData.forEach(createTable); // Call createTable for each existing habit
}

addBtn.addEventListener('click', () => {
  habitForm.classList.remove('hidden')
})
cancelBtn.addEventListener('click', function(){
  event.preventDefault()
  habitForm.classList.add('hidden')
})
saveBtn.addEventListener('click', function(){
  event.preventDefault()
  addHabit()
  
})

function adjustDates(){
  let today = new Date();  
  let currentDayOfMonth = today.getDate(); 
  let dayOfWeek = today.getDay(); 
  let array = [];  
  
  for (let i = dayOfWeek - 1; i >= 0; i--) {
    let prevDate = new Date();
    prevDate.setDate(currentDayOfMonth - (dayOfWeek - i));  
    array.unshift(prevDate.getDate()); 
  }
  for (let i = dayOfWeek; i <= 6; i++) {
    let nextDate = new Date();
    nextDate.setDate(currentDayOfMonth + (i - dayOfWeek));  
    array.push(nextDate.getDate()); 
  }
  array.forEach((number,index) => {
    if (dateCells[index]) {
      dateCells[index].textContent = number + 1
    }
  })
  
}
function addHabit(){
  const habitDict = {
    name: habitInput.value,
    point: habitPoint.value
  }
  habitData.push(habitDict)
  localStorage.setItem('habitData', JSON.stringify(habitData))
  createTable(habitDict)
}

function calculateTotalRow(row){
    const pointCell = row.cells[1]
    const pointValue = parseInt(pointCell.textContent, 10) || 0
    let dayCells = Array.from(row.cells).slice(3,10)
    const completedDays = dayCells.filter(cell => cell.classList.contains('selected'))
    let temp = completedDays.length * pointValue
    return temp
  }
function createTable(dict) { 
  const newRow = table.insertRow()
  const habitCell = newRow.insertCell(0)
  const pointCell = newRow.insertCell(1)
  const actionCell = newRow.insertCell(2)
  const mCell = newRow.insertCell(3)
  const tCell = newRow.insertCell(4)
  const wCell = newRow.insertCell(5)
  const thCell = newRow.insertCell(6)
  const fCell = newRow.insertCell(7)
  const sCell = newRow.insertCell(8)
  const suCell = newRow.insertCell(9)
  const totalCell = newRow.insertCell(10)
  const deleteBtn = document.createElement('button')


  habitCell.textContent = dict.name
  pointCell.textContent = dict.point
  totalCell.textContent = 0
  deleteBtn.textContent = 'Delete'  
  actionCell.appendChild(deleteBtn)

  deleteBtn.addEventListener('click', function() {
    const rowIndex = this.closest('tr').rowIndex
    table.deleteRow(rowIndex)
    habitData.splice(rowIndex - 1, 1)
    localStorage.setItem('habitData', JSON.stringify(habitData))
  })
  
  const updatePoints = () => {
      totalCell.textContent = Number(calculateTotalRow(newRow)); 
  };
  const changeTogreen = (cell) => {
      cell.addEventListener('click', () => {
          cell.classList.toggle('selected');  // Toggle the 'selected' class
          updatePoints(); 
      });
  };
  
  updatePoints();
  changeTogreen(mCell, pointCell)
  changeTogreen(tCell, pointCell)
  changeTogreen(wCell, pointCell)
  changeTogreen(thCell, pointCell)
  changeTogreen(fCell, pointCell)
  changeTogreen(sCell, pointCell)
  changeTogreen(suCell, pointCell)

}
function retrieveHabitsData() {
  console.log('This is your habit Data', habitData)
  habitData.forEach((habit) => {
    const newRow = table.insertRow()
    const habitCell = newRow.insertCell(0)
    const pointCell = newRow.insertCell(1)
    const actionCell = newRow.insertCell(2)
    const mCell = newRow.insertCell(3)
    const tCell = newRow.insertCell(4)
    const wCell = newRow.insertCell(5)
    const thCell = newRow.insertCell(6)
    const fCell = newRow.insertCell(7)
    const sCell = newRow.insertCell(8)
    const suCell = newRow.insertCell(9)
    const totalCell = newRow.insertCell(10)
    const deleteBtn = document.createElement('button')

    habitCell.textContent = habit.name
    pointCell.textContent = habit.point
    totalCell.textContent = 0
    deleteBtn.textContent = 'Delete'  
    actionCell.appendChild(deleteBtn)
    
    deleteBtn.addEventListener('click', function() {
      const rowIndex = this.closest('tr').rowIndex
      table.deleteRow(rowIndex)
      habitData.splice(rowIndex - 1, 1)
      localStorage.setItem('habitData', JSON.stringify(habitData))
    })

    const updatePoints = () => {
        totalCell.textContent = Number(calculateTotalRow(newRow)); 
    };
    const changeTogreen = (cell) => {
        cell.addEventListener('click', () => {
            cell.classList.toggle('selected');  // Toggle the 'selected' class
            updatePoints(); 
        });
    };

    updatePoints();
    changeTogreen(mCell, pointCell)
    changeTogreen(tCell, pointCell)
    changeTogreen(wCell, pointCell)
    changeTogreen(thCell, pointCell)
    changeTogreen(fCell, pointCell)
    changeTogreen(sCell, pointCell)
    changeTogreen(suCell, pointCell)
  })
}
retrieveHabitsData()                  
adjustDates()



