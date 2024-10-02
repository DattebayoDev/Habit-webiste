# Considerations:
JavaScript Object: A simple and flexible way to store key-value pairs of data.
Custom Class: A more structured approach to organizing data, providing encapsulation and methods for operations.
Data Storage: Deciding how to store habit data.
Scalability: Ensuring that the data structure can handle a growing number of habits.
Maintainability: Designing the data structure to be easy to understand and modify.

## New Information
Callbacks and their use case

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
Currently, I am able to add habits, but there some overlapping when I try to display them. The habits display from the Object . 
I solved in myself; no help. I basically just created a count = 0. Then I created a loop using while which only ran if the length of my dict was greater than pointer or equal to my pointer, then i would add 1 to my pointer which would make it not run. So as long as my count is equal to dictionary, it will not run. I will probably run into issues later when i delete them. 



## Before and After Code 


Problem: Inefficent Iterative Build / Cumulative Output

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
Solution: So SIMPLE 

let newHabit = habit_data[habit_data.length - 1]; // Get the last added habit

```javascript
let newRow = `<tr>
                <td>${newHabit.name}</td>
                <td>${newHabit.goal}</td>
             </tr>`;

```
// Append the new row without duplicating previous ones
tableBody.innerHTML += newRow;
