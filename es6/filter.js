const numbers= [43,4,5,98,34,23];
const aPlusMarks = numbers.filter(number => number > 80);//output:98
// console.log(aPlusMarks);

const company = [
    {name:'Saad It',Developer:13},
    {name:'Rohan solution',Developer:22},
    {name:'Sabit customer care',Developer:45},
    {name:'Rapin child care',Developer:02}
]

const bigCompany = company.filter(people => people.Developer > 20);
const bigCompany = company.find(people => people.Developer > 20);
console.log(bigCompany);