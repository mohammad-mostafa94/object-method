// function add(num1,num2) {
function add(num1,num2=3) {
    const total = num1 + num2;
    return total;
}
// console.log(add(1));// output: NaN
// console.log(add(1,2)); // output: 3
// console.log(add(1)); // output: 4

// function fullName(first,last ) {
function fullName(first,last = "Bhuiyan") {
    const fullName = first + " " + last;
    return fullName;
}
// console.log(fullName('soboj'))// output:soboj undefined
console.log(fullName('soboj'))// output: soboj Bhuiyan