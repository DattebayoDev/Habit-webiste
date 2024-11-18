const dateNavigator = {
  position: 0,

  getDates() {
    baseDate = new Date();
    baseDate.setDate(baseDate.getDate() + this.position);
    // console.log(baseDate, this.position )
    return {
      past: baseDate.getDate() - 1,
      present: baseDate.getDate(),
      future: baseDate.getDate() + 1,
    };
  },

  goBack() {
    this.position -= 1;
    return this.getDates();
  },

  goForward() {
    this.position += 1;
    return this.getDates();
  },
};

const getDateElements = () => Array.from(document.querySelectorAll(".date"));

function updatingDateElements(dates, elements) {
  elements.forEach((element, index) => {
    element.textContent = dates[index];
  });
}

const selectTableBody = () => document.querySelector("tbody");

let habitData = [
  { name: "Habit", goal: 1, dates: [1, 2] },
  { name: "Habit2", goal: 2, dates: [3, 4] },
];



const fetchHeaders = () => Array.from(document.getElementsByTagName("th"));

function app() {
  const dates = dateNavigator.getDates();
  const dateElements = getDateElements();
  updatingDateElements(Object.values(dates), dateElements);
}

app();
