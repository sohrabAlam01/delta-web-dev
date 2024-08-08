//changing multiple color after make sure the color is changed (used when making sure the api is fetched before making in use)
//asynchrous means ek kaam hone ke baad hi dusra kaam ho 
h1 = document.querySelector("h1");
/*
function changeColor(color, delay, nextColor)
{
    setInterval(() => {
        h1.style.color = color;
        if(nextColor) nextColor();
    }, delay);
}  
*/
//nesting of function call called callack hell: calling a callback inside the callback............

//chaging color first green only then red then black then gray then yellow each after 1s delay
/*
changeColor("green", 1000, ()=>{
    changeColor("red", 1000, ()=>{
        changeColor("black", 1000,()=>{
            changeColor("gray", 1000, ()=>{
                changeColor("yellow", 1000);
            });
        });
    });
});

*/

                   //another example of callback hell

/*
 function storeToDb(data, success, failure)
 {
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4)
    {
        success();
    }
    else
    {
        failure();
    }
 }


storeToDb("data1", ()=>{
    console.log("success1: data1 is saved");
    //if data1 is saved then only save data 2 otherwise not
    storeToDb("data2", ()=>{
        console.log("success2: data2 is saved");
        //save data3 after making sure that data1 and data2 is saved otherwise not
        storeToDb("data3", ()=>{
            console.log("success3: data3 is saved");
        }, ()=>{
            console.log("failure3: weak connection");
        })
    }, ()=>{
        console.log("failure2: weak connection");
    })
}, ()=>{
    console.log("failure1: weak connection");
})
*/

                           //promises to deal with the callback hell

/*
  function storeToDb(data)
  {
     return new Promise((resolve, reject)=>{
    
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4) resolve(`success: ${data} is saved`);
        else reject(`failure: ${data} is not saved`);
     })
     
  } */  
  //printing the promise
 // let promise = storeToDb();
 // console.log(promise); 
  
  //using then and catch

 /* storeToDb("data1")
  .then((result)=>{
   console.log("data1 is saved");
   console.log("result of promise: ", result);
   return storeToDb("data2")
  })
  .then((result)=>{
    console.log("data2 is saved");
    console.log("result of promise: ", result);
    return storeToDb("data3");
  })
  .then((result)=>{
    console.log("data 3 is saved");
    console.log("result of promise: ", result);
  })
  .catch((error)=>{
    console.log("error of promise:", error);
  })
*/

                 //changing color using promise//


function changeColor(color, delay){
    return new Promise((resolve, reject) =>
    {
        setTimeout(()=>{
          h1.style.color = color;
          resolve(`${color} is changed`);
        }, delay);
    })
}

changeColor("red", 1000)
.then(()=>{
    //after changing color to red then change it to orange and after successfully it returns a promise that the color is changed
    return changeColor("green", 1000);
})
.then(()=>{
    //after green change it to gray and return the promise that the color is changed now you can do other operation
    return changeColor("gray", 1000);
})
.then(()=>{
    changeColor("blue", 1000);
})
