
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
        const readData = this.fs.readFileSync(this.fileName, "utf-8")
        return JSON.parse(readData)
    }

    save(data){
        const writeData = this.fs.writeFileSync(this.fileName, JSON.stringify(data))
    }
}

storage = new FileStorageAdapter('j')
console.log(1, storage.constructor)


class HabitManager {
  constructor() {
    const storage = typeof process === 'object' ? new FileStorageAdapter("name"): new LocalStorageAdapter()
    console.log(storage.constructor.name)
  }

  addHabit(habit, goal, dates = []) {
    habit = new Habit(habit, goal, dates);
    this.habits.push(habit);
    return habit;
  }

  saveHabit(habit){

  }
}

manager = new HabitManager();
manager.addHabit("dance", 1);


