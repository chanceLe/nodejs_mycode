var counter = require("./5.js").counter;
var incCounter = require("./5.js").incCounter;

console.log(counter);
incCounter();
console.log(counter);

console.log(__filename);
console.log(__dirname);
console.log(global["process"]["env"]["NVM_DIR"]);
console.log(global.process.env.NVM_DIR);
