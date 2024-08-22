//factory function

function personMaker(name, age)
{
    let person = {
        name : name,
        age : age,
        talk: ()=>{
            console.log(`Hello i am ${this.name}`);
        }
    }
    return person;
}

let p1 = personMaker("Muskan", 20);    //every object will have it's one seperate copy of the common function talk()
let p2 = personMaker("Sohrab", 22);   //every object will have it's one seperate copy of the common function talk()
console.log(p1);
console.log(p2);
console.log(p1.talk());


//using constructor and new operator instead of factory function to create a single copy of each common function for each object 

//construction: a blueprint of an object that returns nothing and start with capital letter

function Person(name, age)
{
    this.name = name;
    this.age = age;
}


Person.prototype.talk = function(){
console.log(`hi my name is ${this.name}`);
}
//new operator is used to initialize an instance of a user-defined object or a built in object
let person1 = new Person("Sohrab", 22);
let person2 = new Person("Muskan", 22);
console.log(person1);
console.log(person2);
console.log(person2.talk());   //each object will have the same copy of talk() function unlike we saw in factory function


//we have an another better way to create an blueprint of an object and prototype function using class

class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //it behaves like a prototype function


   talk()
    {
        console.log(`hi my name is ${this.name}`);
    }
}

let p3 = new PersonClass("Ssss", 44);
let p4 = new PersonClass("rrrr", 65);
console.log(p3);
console.log(p4);
console.log(p3.talk());