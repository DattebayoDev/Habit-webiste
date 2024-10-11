# Habit Tracker
## Description
The website is a gamified habit tracking application that rewards users for completing their habits. Users earn points for maintaining their habits, which can be redeemed for customizable rewards in an in-app store.
Table of Contents

## Features

Technologies  
Getting Started     
Project Status  
Roadmap  

## Features

### Current Features  

Basic habit tracking interface  
Habit creation and management  

## Planned Features

Calendar integration using FullCalendar library  
Points system for completed habits  
Custom reward store  
Progress tracking  
Achievement system  
Mobile-responsive design  

## Technologies

HTML5 

CSS3

JavaScript

FullCalendar Library (v6.1.15)


## Getting Started
Currently in development.  
The project will be accessible via web browser when deployed.

### Project Status
Current Stage: Early Development (Beta)

## Implementing basic calendar functionality
Setting up core habit tracking features

## Roadmap
### Phase 1 (Current)

 Set up project structure  
 Integrate FullCalendar  
 Create habit tracking table  
 Implement basic habit management  

### Phase 2 (Upcoming)  

 Add points system  
 Create reward store interface  
 Implement user progress tracking  

### Phase 3 (Future)

 Add achievement system  
 Implement data visualization  
 Add social features  

Note: This is a living document that will be updated as the project evolves.

### Challenges & Solutions
#### New Challenge: Table Row Appending
- **Problem:** Inefficient table updates causing performance issues and duplicate content
- **Initial Approach:** Used cumulative innerHTML updates in a loop to build table
- **Solution:** Targeted append of only the new row instead of rebuilding entire table
- **Key Learning:** Always consider performance impact of DOM operations - modify only what needs to change

#### New Challenge: Form Data Handling
- **Problem:** Inconsistent form data capture and premature value access
- **Initial Approach:** Tried accessing input values immediately on page load
- **Solution:** Implemented proper event listeners and form submission handling
- **Key Learning:** Wait for user interaction before accessing form values

### Technical Learnings
#### New Concept: Data Attributes
- What it is: Custom HTML attributes that store metadata, starting with 'data-'
- How it works: Attributes are added to HTML elements like `data-index="1"` and accessed via JavaScript
- Why it's useful: Provides clean way to store metadata about elements without custom properties
- Resources: MDN Data Attributes Documentation

#### New Concept: Event Delegation
- What it is: Pattern for handling events on multiple elements through a parent
- How it works: Uses event bubbling to catch events at parent level
- Why it's useful: Improves performance and handles dynamic elements
- Resources: JavaScript.info Event Delegation

### Best Practices Learned
- **New Practice:** Custom Class Implementation
  - Why it's important: Provides structured approach to organizing data, enabling encapsulation and methods
  - How to implement:
    ```javascript
    class Habit {
        constructor(name) {
            this.name = name;
        }
    }
    ```

- **New Practice:** Event Listener Pattern
  - Why it's important: Ensures proper timing of data access and user interaction handling
  - How to implement:
    ```javascript
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = input.value;
        // Handle form submission
    });
    ```

- **New Practice:** Git Branch Management
  - Why it's important: Maintains clean project history and enables feature isolation
  - How to implement:
    ```bash
    git checkout -b feature-branch
    git add .
    git commit -m "Feature description"
    git push origin feature-branch
    ```
