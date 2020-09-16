const path = require(`path`);
const { connected } = require("process");

console.log(__filename);
console.log(path.dirname(__filename));

console.log(path.parse(__filename));
console.log(path.sep);

console.log(__dirname, `${path.sep}public`);

console.log(path.join(__dirname, `${path.sep}public`));
