const computer = {ram:"1600gm",color:"black",price:40000};
const keys = Object.keys(computer);
// console.log(keys);
const values = Object.values(computer);
// console.log(values);

const pairs = Object.entries(computer);
// console.log(pairs);
delete computer.color;
computer.ram = "1600gb";
Object.seal(computer);
Object.freeze(computer);
console.log(computer);
