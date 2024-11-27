** New Information **

Strategy Pattern


** Left at  11/23 **

Looking at your test cases overall, what happens if we try to:

Delete a habit at an invalid index (like -1 or 999)?
Delete from an empty habit list?

Would you like to try adding a test for one of these edge cases? Which one interests you most?
Also, when testing array operations, it can be helpful to verify the entire state, not just one element.
How might you verify that all remaining habits are exactly what you expect them to be?



working on 11/27 

Issues:

renderCell mixes display logic with event handling
renderCurrentDates tightly couples indices to date positions
Methods have multiple responsibilities

Improvement areas:

Separate data access from rendering // working
Extract event handling to dedicated methods
Reduce parameter passing between render methods


Build event binding methods in your View class to handle:
    Checkbox state changes
    Delete button clicks
    Form submission





Implement checkbox state persistence by:
    Tracking dates in your Model
    Reflecting states in View render methods


Create your Controller class to:
    Connect Model and View
    Handle event communication
    Manage data updates