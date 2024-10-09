# Considerations:
JavaScript Object: A simple and flexible way to store key-value pairs of data.
Custom Class: A more structured approach to organizing data, providing encapsulation and methods for operations.
Data Storage: Deciding how to store habit data.
Scalability: Ensuring that the data structure can handle a growing number of habits.
Maintainability: Designing the data structure to be easy to understand and modify.

## New Information 
Callbacks and their use case


```javascript

    
    
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

```
**Blur Event**

The blur event fires when an element loses focus
Used in our application for saving edits when users finish editing a cell
Example analogy: Think of it like finishing chopping vegetables - once you're done (blur), you move on to the next step

**Data Attributes**

Custom data attributes are used to store metadata about table cells:

data-index: Stores the row index
data-field: Identifies the field type (name or goal)

Think of data attributes like labels on storage boxes:

The box (element) contains the content
Labels (data attributes) tell us what's inside and where it belongs
Must start with "data-" but can be named anything after that
Cannot use dynamic values like ${habit.name} as attribute names

template literal syntax ${index} 

event.target refers to the specific element that triggered the element, so the cell.

custom data attributes can be anything as long as they start with data-

for of or for in: 

## Things I forgot about:
Accessing Input Value Too Early: 
I tried to log habitInput.value immediately on page load, before the user interacted with the form. 
Improvement: Always retrieve input values after user action (e.g., form submission or button click).

Missing Event Listener: 
I didn’t have an event listener on the form to handle user input submission. 
Improvement: Use event listeners to capture form data and prevent default form behavior when needed.

Incorrect Button Attribute: 
The button tag had action="submit", which is not correct. 
Improvement: Use type="submit" for form submission buttons.


## Review ( Exam 10/06 ): 
Arrow functions ? 
object Object ? 
closure ??

How to switch between branches on GitHub and locally.
Why are there discrepancies between local and remote branches.
How to resolve conflicts between branches.
How to delete branches and recover changes.
How to understand the output of git branch -a.

File Management:
Why are there extra files on my local machine that aren't on GitHub.
How to remove files from a Git repository.
How to understand the output of git status and ls -la.

General Git Concepts:
What is a detached HEAD state.
How to pull changes from a remote repository.
How to create and delete branches.



## Problems and Solutions 


**Problem: Inefficent Iterative Build / Cumulative Output
**
```javascript
for (count = 0; count <= habit_data.length; count ++) {
      let habit = habit_data[count]
      let row = `<tr>
                  <td>${habit.name} </td>
                  <td>${habit.goal} </td>
              </tr>`;
      tableBody.innerHTML += row;
  }
 
```
**Solution: So SIMPLE 
**

let newHabit = habit_data[habit_data.length - 1]; // Get the last added habit

```javascript
let newRow = `<tr>
                <td>${newHabit.name}</td>
                <td>${newHabit.goal}</td>
             </tr>`;

```
// Append the new row without duplicating previous ones
tableBody.innerHTML += newRow;


