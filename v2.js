let habit_data = []; // Assuming this is your data array
const tableBody = document.getElementById("tableBody");

function displayTable() {
    tableBody.innerHTML = "";

    habit_data.forEach((habit, index) => {
        let row = `<tr data-index="${index}">
            <td>${habit.name}</td>
            <td class="editable" data-field="goal">${habit.goal}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });

    // Add event listeners
    tableBody.addEventListener("click", handleTableClick);
}

function handleTableClick(event) {
    const target = event.target;
    const row = target.closest("tr");
    const index = row.dataset.index;

    if (target.classList.contains("edit-btn")) {
        startEditing(row);
    } else if (target.classList.contains("delete-btn")) {
        deleteHabit(index);
    } else if (target.classList.contains("save-btn")) {
        saveEdits(row);
    }
}

function startEditing(row) {
    const editableCell = row.querySelector(".editable");
    editableCell.contentEditable = true;
    editableCell.focus();

    const buttonCell = row.querySelector("td:last-child");
    buttonCell.innerHTML = '<button class="save-btn">Save</button>';
}

function saveEdits(row) {
    const index = row.dataset.index;
    const editableCell = row.querySelector(".editable");
    const field = editableCell.dataset.field;
    const newValue = editableCell.textContent.trim();

    // Update habit_data
    habit_data[index][field] = newValue;

    // Reset the cell and buttons
    editableCell.contentEditable = false;
    const buttonCell = row.querySelector("td:last-child");
    buttonCell.innerHTML =
        '<button class="edit-btn">Edit</button><button class="delete-btn">Delete</button>';

    console.log(`Updated habit ${index}, ${field} to: ${newValue}`);
}

function deleteHabit(index) {
    habit_data.splice(index, 1);
    displayTable(); // Refresh the table
}

// Initial display
displayTable();
