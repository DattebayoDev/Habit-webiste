// function addHabitToArray(habitData) {
//   let habit = new Habit(habitInput.value, habitGoal.value, []);
//   habitData.push(habit);
// }

// function saveAndDisplay(habitData) {
//   localStorage.setItem("habitData", JSON.stringify(habitData));
//   displayTable();
// }

function cleanTableHeader(headers) {
  x = headers.split("\n");
  x.splice(0, 1);
  x.splice(-1, 1);

  for (let i = 0; i < x.length; i++) {
    x[i] = x[i].trim();
  }
}

function displayTable() {
  let tableHeaderRows = document.getElementById("tableHeaderRow").textContent;

  createRowForHabit(habitData);
}

function createRowForHabit(habitData) {
  tableBody.innerHTML = " ";

  for (n = 0; n < habitData.length; n++) {
    let habit = habitData[n];

    let datesArray = Object.values(habit.dates);

    let row = document.createElement("tr");

    searchHeader(habit, datesArray, row);

    tableBody.appendChild(row);
  }
}

function searchHeader(habit, datesArray, row, state) {
  for (header of x) {
    if (header === "Habit's") {
      createLabelCell(row, habit.name);
    } else if (parseInt(header) === state) {
      createInputCell(row, state, 0, datesArray);
    } else if (parseInt(header) === state) {
      createInputCell(row, present, 1, datesArray);
    } else if (parseInt(header) === state) {
      createInputCell(row, future, 2, datesArray);
    } else if (header === "Goal") {
      createLabelCell(row, habit.goal);
    }
  }
}

function createLabelCell(row, name) {
  let label = document.createElement("td"); // creates a new data cell
  label.textContent = name;
  row.appendChild(label);
}

function createInputCell(row, date, count, array, n) {
  let dataCell = document.createElement("td");
  let input = document.createElement("input");
  addAttributes(input, n, count);
  addInputCell(row, dataCell, input);
}


function addAttributes(input, n, count) {
  input.className = "checkBox";
  input.type = "checkbox";
  input.dataset.habitIndex = n;
  input.dataset.checkBoxIndex = count; // unique
}



module.exports = { createLabelCell, createInputCell };








function displayTable() {
  const tableHeaderRows = document.getElementById("tableHeaderRow");
  const headers = Array.from(
    tableHeaderRows.getElementsByTagName("th"),
    (th) => 
      th.textContent
    
  );
  tableBody.innerHTML = " ";
  generateHabitRow(headers)
}

function generateHabitRow(headers){
  for (mainCounter = 0; mainCounter < habitData.length; mainCounter++) {
    const habit = habitData[mainCounter];
    const datesArray = Object.values(habit.dates);
    const row = document.createElement("tr");
    populateRowCells(headers, datesArray, row, habit)
    tableBody.appendChild(row);
  }
}

function populateRowCells(headers, datesArray, row, habit){
  const dateConfig = {
    [past] : 0,
    [present] : 1,
    [future] : 2
  }

  console.log(dateConfig)

  for (header of headers) {
    if (header === "Habit's") {
      createLabelCell(row, habit.name);
    } else if (header === "Actions") {
      createDeleteDataCell(row, mainCounter, habitData);
    } else if (parseInt(header) === past) {
      createInputCell(row, past, 0, datesArray, mainCounter);
    } else if (parseInt(header) === present) {
      createInputCell(row, present, 1, datesArray, mainCounter);
    } else if (parseInt(header) === future) {
      createInputCell(row, future, 2, datesArray, mainCounter);
    } else if (header === "Goal") {
      createLabelCell(row, habit.goal);
    }
  }
}




function displayTable() {
  const tableHeaderRows = document.getElementById("tableHeaderRow");
  const headers = Array.from(
    tableHeaderRows.getElementsByTagName("th"),
    (th) => 
      th.textContent
      // console.log(th);
    
  );
  tableBody.innerHTML = " ";

  for (mainCounter = 0; mainCounter < habitData.length; mainCounter++) {
    let habit = habitData[mainCounter];
    // console.log(habit)
    let datesArray = Object.values(habit.dates);

    let row = document.createElement("tr");
    for (header of headers) {
      // console.log(typeof(header))
      if (header === "Habit's") {
        createLabelCell(row, habit.name);
      } else if (header === "Actions") {
        createDeleteDataCell(row, mainCounter, habitData);
      } else if (parseInt(header) === past) {
        createInputCell(row, past, 0, datesArray, mainCounter);
      } else if (parseInt(header) === present) {
        createInputCell(row, present, 1, datesArray, mainCounter);
      } else if (parseInt(header) === future) {
        createInputCell(row, future, 2, datesArray, mainCounter);
      } else if (header === "Goal") {
        createLabelCell(row, habit.goal);
      }
    }

    tableBody.appendChild(row);
  }
  // x = tableBody.lastChild.lastChild
  // console.log(x)
}