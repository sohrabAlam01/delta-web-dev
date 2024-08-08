
                                                // arrayMethods


                        //forEach method

let arr = [1, 2, 3, 4, 5];

let print = function (ele) {
    console.log(ele);
}

arr.forEach(print);


//passing arrow function

arr.forEach((ele) => {
    console.log(ele);
})

//using for object array

let arr1 = [
    {
        name: "Sohrab",
        marks: 54
    },
    {
        name: "Muskan",
        marks: 76
    },
    {
        name: "john",
        marks: 90
    }]

arr1.forEach((student)=>{
        console.log(student.marks);
    })


    ////map method : it stores the value returend by the callback in a new array 

 let marks =    arr1.map((student)=>{
       return student.marks;
    })

    let gpa =    arr1.map((student)=>{
        return (student.marks)/10;
     })

    console.log(marks);
    console.log(gpa);


    ////filter method : it retures and store those value for which the call back retrn true

    //filter all the even element from an array

    let arr3 = [4, 2, 1, 9, 7, 8, 0];

    let even = arr3.filter((el)=>{
        return el % 2 == 0;
    })
    console.log(even);

    let greaterThan5 = arr3.filter((el)=>{
        return el > 5;
    })
    console.log(greaterThan5);


    ////every method: return true if for all the alement callback returns true

    let ans = [4, 2, 6, 0].every((ele) => ele%2 == 0);  //true
    [4, 2, 6, 1].every((ele) => ele%2 == 0);          //false
   console.log(ans);


   //// some method : retuns true when for any element the call back returns true;


   [4, 2, 6, 1].some((ele) => ele%2 != 0);   //true
   [4, 2, 6, 2].some((ele) => ele%2 != 0);   //false

   ////reduce : returns the single result

   let b = [6, 4, 2, 4].reduce((res, ele) => res * ele);
   console.log(b);  //192
 
   //finding max using reduce method

   let max =  [6, 4, 2, 4].reduce((max, ele)=> {
    if(ele > max) return max;
    else return max;
   })

   console.log(max);


   //// spread : expand iterable into multiple values 

   let x = [4, 5, 2, 9];
   console.log(x);   // [4, 5, 2, 9]
   console.log(...x); // 4, 5, 6, 7

   let newarr = [...x];  

   let mini = Math.min(...x);  // similar to : Math.min(4, 5, 2, 9)

   //spread with string
   console.log("SOHRAB");  
   console.log(..."SOHRAB");  

   //concating two arrays

   let n = [4, 5, 2];
   let m = [1, 9, 0];
   let newar = [...n, ...m];  //[4, 5, 2, 1, 9, 0]


   //spread with objects

   const o1 = {
    name : "Sohrab",
    marks : 98
   }

   let obj2 = {
    ...o1,
    roll: 90
   }

   console.log(obj2);

   let obj3 = {..."SOHRAB"};



   ////rest : it allows a function to take indifinite number of arrays and bundle it into an iterator

  function add(...args) 
  {
    return args.reduce ( (res, el) =>  res + el );
  }

