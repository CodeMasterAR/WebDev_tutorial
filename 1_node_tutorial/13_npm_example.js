// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <pakageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (Stores important info about project/package)
// nmanual approach (create package.json in the root, create properties etc)
// npm init (Step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)

console.log('hello World ')