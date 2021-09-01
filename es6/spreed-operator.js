const numbers = [1,3,3,4,9];
// const max = Math.max(numbers); // output: NaN
const max = Math.max(...numbers); // output: 9
console.log(max);