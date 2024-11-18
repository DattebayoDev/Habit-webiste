
class Habit {
  constructor(name, goal, dates = [], difficulty = true) {
    this.name = name;
    this.goal = goal;
    this.dates = dates;
    this.difficulty = difficulty;
  }
}

class LocalStorageAdapter{
    load() {
        let storage = JSON.parse(localStorage.getItem("habitData")) || []
        return storage
    }
    save(data) {
        localStorage.setItem("habitData", JSON.stringify(data))
    }
}

class FileStorageAdapter {
    constructor(fileName){
        this.fs = require('fs')
        this.fileName = fileName
    }

    load(){
        // checks to see if file name exists if not then return an empty array
        try {
            const readData = this.fs.readFileSync(this.fileName, "utf-8")
            return JSON.parse(readData)
        } catch (error) {
            console.log(error)
            return [] 
        }
    }

    save(data){
        const writeData = this.fs.writeFileSync(this.fileName, JSON.stringify(data))
    }
}


class HabitManager {
  constructor() {
    this.storage = typeof process === 'object' ? new FileStorageAdapter("habitData.json"): new LocalStorageAdapter()
    this.habits = this.storage.load()
  }

  addHabit(habit, goal, dates = []) {
    habit = new Habit(habit, goal, dates);
    this.habits.push(habit);
    this.saveHabit()
    return habit;
  }

  saveHabit(){
    this.storage.save(this.habits)
  }
}
manager = new HabitManager();
// manager.addHabit('Sing', 1)
console.log(manager.habits)



//localStorage.clear()