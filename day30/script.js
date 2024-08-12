//summary
//process and precess.argv
//how to export and import from another file


let n = 5;
for(let i=0; i<n; i++)
{
    console.log("HELLO", i);
}

//console.log(process);
//console.log(process.argv);
const math = require("./math");
console.log(math.sum(4,5));

//importing from the directory

let fruits = require("./fruits");
console.log(fruits);