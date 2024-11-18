const fs = require('fs')

const testData = { test: "hello"}
fs.writeFileSync("test.json",JSON.stringify(testData))

const readData = fs.readFileSync("test.json", 'utf-8')
console.log(JSON.parse(readData))


//fs is a object. What is utf-8, Is require a method or class. writeFileSync, readFileSync is a method