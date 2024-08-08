//our first api request
let url = "https://catfact.ninja/fact";

/*
fetch(url)
.then((res)=>{
 //console.log(res);
 res.json().then((data)=>{
    console.log(data);
    console.log(data.fact);
 });
})
.catch((err)=>{
 console.log(err);
})
*/
//making multiple api request sequentially
/*
fetch(url)
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log("fact1: ", data.fact);
    return fetch(url);
})
.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log("fact2: ", data.fact);
})
.catch((err)=>{
    console.log("ERROR", err);
})
*/
//api request using async and await

let url2 = "https://type.fit/api/quotes";
/*

fetch(url2)
.then((responce)=>{
    return responce.json();
})
.then((data)=>{
    console.log(data);
    console.log(data[Math.floor(Math.random()*15)].text);
})

*/
async function getQuote(){

   let responce = await fetch(url2);
   let data = await  responce.json();
   console.log(data);
   let rand = Math.floor(Math.random()*15);
   console.log("quote1: ",data[rand].text);
   console.log("author: ", data[rand].author);
   
   //quote 2

    responce = await fetch(url2);
    data = await  responce.json();
   console.log(data);
    rand = Math.floor(Math.random()*15);
   console.log("quote2: ",data[rand].text);
   console.log("author: ", data[rand].author);

}

getQuote();

//handling error
/*
try{
    let responce = await fetch(url2);
    let data = await  responce.json();
    console.log(data);
    let rand = Math.floor(Math.random()*15);
    console.log("quote1: ",data[rand].text);
    console.log("author: ", data[rand].author);
    
    //quote 2
 
     responce = await fetch(url2);
     data = await  responce.json();
    console.log(data);
     rand = Math.floor(Math.random()*15);
    console.log("quote2: ",data[rand].text);
    console.log("author: ", data[rand].author);
}catch(err)
{
    console.log(err);
}

console.log("bye");
*/