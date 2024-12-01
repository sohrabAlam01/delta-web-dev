import { useState, useEffect } from "react";

export default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);
    let [countz, setCountz] = useState(0);

    let incCountx = ()=>{
          setCountx((currCount) => currCount + 1);
    }
    let incCounty = ()=>{
          setCounty((currCount) => currCount + 1);
    }
    let incCountz = ()=>{
          setCountz((currCount) => currCount + 1);
    }

    useEffect(function print(){
        console.log("This is the side effect");
    }, [countx])          //triggers only when countx state changes

    useEffect(function print(){
        console.log("This is the side effect");
    }, [countx, county])       //triggers only when countx or county states changes

    useEffect(function print(){
        console.log("This is the side effect");
    }, [])         //useeffect trigers only during render but does not during re render

    return (

        <div>
            <h1>Count = {countx}</h1>
            <button onClick={incCountx}>+1</button>
            <br/> <br/> 
            <h1>Count = {county}</h1>
            <button onClick={incCounty}>+1</button>
            <br/> <br/>  
            <h1>Count = {countz}</h1>
            <button onClick={incCountz}>+1</button>
        </div>
    )
}