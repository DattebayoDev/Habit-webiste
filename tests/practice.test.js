const add = require('../practice.js');

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});


const cleanTableHeader = require('../practice.js');

test('Basic case with multiple headers: ', () => {
  const input = ["\nHabit's\n            29\n            30\n            31\n            Goal\n          "]
  const expectedOutput = ["Habit's", '29', '30', '31', 'Goal']
  expect(cleanTableHeader(input).toBe(expectedOutput))
})