const search = require("./search")

const nums = [-1,0,3,5,9,12];
const target = 9;

// target exists 
console.log(search(nums, target))

// target doesnt exists
console.log(search([-1,0,3,5,9,12], 2))