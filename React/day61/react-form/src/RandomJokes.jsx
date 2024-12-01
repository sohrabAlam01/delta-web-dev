import { useEffect, useState } from "react";

export default function Jokes(){
     
    let [jokes, setJokes] = useState({
        setup: "",
        punchline: ""
    })
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getRandomJokes = async() => {
        
               let responce = await fetch(URL);
               let jsonResponce = await responce.json();    
               console.log(jsonResponce);
               setJokes(
                   {setup: jsonResponce.setup, punchline: jsonResponce.punchline}
               )
    }

    useEffect(()=>{
         //note: This is the correct way to write async function within a useEffect 
       
         async function getFirstJoke(){
              
            let responce = await fetch(URL);
               let jsonResponce = await responce.json();
               console.log(jsonResponce); 
               setJokes( 
                   {setup: jsonResponce.setup, punchline: jsonResponce.punchline}  
               ) 
        }

        getFirstJoke();
        
    }, [])

    return(

        <div>
            <p>{jokes.setup}</p>
            <p>{jokes.punchline}</p>
            <button onClick={getRandomJokes}>Random Jokes</button>
        </div>
    )
}