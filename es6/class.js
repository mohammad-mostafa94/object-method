class Student{
    name;
    constructor(name){
        this.name = name;
    }
    info(){
        console.log(this.name,"First time value");
    }
}

const shakil = new Student("mostafa");
const main = new Student("main");
console.log(shakil);
console.log(main);
shakil.info();