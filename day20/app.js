let student = {
    math: 30,
    chem: 60,
    phys: 69,
    getAvg(){
        let avg = (this.math + this.phys + this.chem)/3;
        console.log(avg);
        console.log(`sharadha average score is ${avg}`);
        console.log(this);
    }
}

//arrow function

let  power = (a, b)=>{ 
return a**b;
}

let cube = n => {
    return n*n*n;
}

//set timeOut function

console.log("hi there");

setTimeout(()=>{
    console.log("apna college")}, 5000);

 console.log("welcome to");
 console.log("welcome to");   

 
//  set inteerval function : it will keep executing the argument function after the given interval

let  id1 = setInterval(()=>{
    console.log("hello Malik");
}, 5000);

//to stop the execution of the function, store the retured id of the setInterval function and use function clearInterval(id)

let id2 = setInterval(()=>{
    console.log("hello Sohrab");
}, 5000);

clearInterval(id1);
clearInterval(id2);


//write a function that prints "hello world" 5 times at interval of 3s

let id = setInterval(()=>{
    console.log("Hello world");
}, 3000);

setTimeout(()=>{
    clearInterval(id);
    
}, 15000);