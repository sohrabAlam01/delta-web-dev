//async function always returns a promise
/*
async function greet()
{
    //throw "some random error";
    return "hello";
}

greet()
.then((greet)=>{
    console.log(greet);  //when promise is resolved
})
.catch((error)=>{
   console.log("the error is", error);  //when promise is rejected
})


//defining an arrow function as as async function


let promise = async ()=>{
    return "good mornig";
}

promise().then((greet)=>{
  console.log(greet);
})
     */            
                           //await method : it halts the execution of the surronding same function until the  current function is executed
  // await can only used inside the async function and promise must be return to use the await keyword
let h1 = document.querySelector("h1");
/*
function changeColor(color, delay)
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           h1.style.color = color;
           resolve();
        }, delay)
    })
}

async function demo()
{
try{
  await changeColor("red", 1000);
   await changeColor("green", 1000);
   await changeColor("yellow", 1000);
   await changeColor("blue", 1000);
    changeColor("orange", 1000);
}
 catch{
   cout<<"error cought";     //handeling rejection
 }
} 
demo();
*/

