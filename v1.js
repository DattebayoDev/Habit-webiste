// Assuming you have a table with id 'habitTable' and tbody with id 'tableBody'
const tableBody = document.getElementById('tableBody');

function displayTable() {
    tableBody.innerHTML = "";
    
    habit_data.forEach((habit, index) => {
        let row = `<tr>
            <td contenteditable="true" data-index="${index}" data-field="name">${habit.name}</td>
            <td contenteditable="true" data-index="${index}" data-field="goal">${habit.goal}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
    c

    // Add event listeners to editable cells
    const editableCells = tableBody.querySelectorAll('[contenteditable="true"]');
    editableCells.forEach(cell => {
        cell.addEventListener('blur', handleCellEdit);
        cell.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.blur();
            }
        });
    });
}

function handleCellEdit(event) {
    const cell = event.target;
    const index = parseInt(cell.dataset.index);
    const field = cell.dataset.field;
    const newValue = cell.textContent.trim();

    // Update habit_data
    habit_data[index][field] = newValue;

    // Here you might want to add validation or additional logic
    console.log(`Updated habit ${index}, ${field} to: ${newValue}`);
}

// Call displayTable() initially and whenever you need to refresh the table
displayTable();



