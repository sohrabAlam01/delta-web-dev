import { useState } from "react";

export default function Counter(){
  
    let[stateVariable, stateUpdate] = useState(10);
    let [count, setCount] = useState(1);     //useState() returns exactly two value 1. initialized value which is 1 here and a method to update the stateVariable and when state varaible is updated it re-renders the component
   
    
    function incCount(){
       setCount(count+1);
        console.log(count);
    };

    let [isLiked, setisLiked] = useState(false);
    function toggleLiked(){
        setisLiked(!isLiked);
    }

    let [clicks, setClicks] = useState(0);
    function countClicks(){
            setClicks(clicks + 1);
    }

    return (
         <div>
            <h1>Count = {count}</h1>
            <button onClick={incCount}>Increment count</button>
         </div>
    )
}