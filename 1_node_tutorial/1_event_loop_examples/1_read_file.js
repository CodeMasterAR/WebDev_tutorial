const { readFile, writeFile } = require('fs')
const path = require('path');

console.log('started a first task')
// CHECK FILE PATH!!!!

const absolutePath = path.resolve(__dirname,'..','content','first.txt');
// console.log(absolutePath)

readFile(absolutePath, 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')