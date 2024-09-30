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


## Review: 
Arrow functions ? 
object Object ? 
closure ??

## Dumb Mistakes 
I spent 2 hours, trying to figure out why my console was not logging my habit input's turns out I just needed to update the chrome browser. This made me feel very duumb. 

### Git Review ( Exam 10/06 )

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


