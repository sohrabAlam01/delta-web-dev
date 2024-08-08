let url = "https://catfact.ninja/fact";

let button = document.querySelector("button");

button.addEventListener("click", async ()=>{
   let fact = await getFact();
   let p = document.querySelector("p");
   p.innerText = fact;
})



async function getFact()
{
    try{

        let res = await axios.get(url);
        return res.data.fact;

    }catch(err){
        return "fact not found";
    }
}