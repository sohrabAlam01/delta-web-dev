//inheritence


//parent (base) class

class Person{
    constructor(name, age)
    {
        console.log("inside the parent class");
        this.name = name;
        this.age = age;
    }

    talk()
    {
        console.log(`Hi sir i am ${this.name}`);
    }
}


//child class of class person

class Student extends Person{
  constructor(name , age , marks)
  {
    console.log("this is the student class");
    super(name, age);
    this.marks = marks;
  }

}

//another child class of Person class

class Teacher extends Person{
    constructor(name, age, sub){
        console.log("this is the teacher class");
        super(name, age);
        this.sub = sub;
    }
}

//instance of student class

let s1 = new Student("sohrab", 22, 65);
//console.log(s1);

//teacher class instance

let t1 = new Teacher("shradha", 25, 99);
//console.log(t2);



