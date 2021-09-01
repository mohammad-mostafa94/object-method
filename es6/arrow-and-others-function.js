// function declaration
function add(num1,num2) {
    return num1 + num2;
}
// function expression
const add2 = function add(num1,num2) {
    return num1 + num2;
}
// function expression (anonymous)
const add3 = function (num1,num2) {
    return num1 + num2;
}
// arrow function
const add4 = (num1,num2) => num1 + num2;

console.log(add(6,9));
console.log(add2(6,9));
console.log(add3(6,9));
console.log(add4(6,9));

const arrow = () => console.log("Allah")
// console.log(arrow);
arrow();

const  division =  num1, num2 =>() {console.log(num1 /num2)}

division(4,2);