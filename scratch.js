// const fs = require('fs');
// const path = require('path');

// let newPath = path.join('my-folder','utils','index.js')

// console.log(newPath)

// const data = fs.readFileSync("README.md",'utf8')
// console.log(data);

const fs = require('fs');

const data = fs.readFileSync('input/cart1.json');
const cart = JSON.parse(data);
console.log(cart)


