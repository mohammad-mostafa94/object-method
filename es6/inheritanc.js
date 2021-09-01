class Person{
    name;
    constructor(name){
        this.name = name;
    }
    info(){
        console.log(this.name,"First time value");
    }
}


class Student extends Person{
    studentName;
    constructor(name,studentName){
        super(name)
        this.studentName = studentName;
    }
}
class Teacher extends Person{
    teacherName;
    constructor(name,teacher){
        super(name)
        this.teacherName = teacher;
    }
}

const shakil = new Person("mostafa");
const shakil2 = new Teacher("kabel","professor kabel");
// console.log(shakil,shakil.info());
console.log(shakil2);