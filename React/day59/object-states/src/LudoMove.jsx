import { useState } from "react";

export default function Ludomove(){
 
     let [moves, setMoves] = useState({blue: 0, green: 0, yellow: 0, red: 0});

     let moveBlue = () => {
   
        /*
       //setMoves({blue: moves.blue+1 })              //it will not worke since
        setMoves({...moves, blue: moves.blue+1});    //since re-render happens only when state variable value is changed but in object if only member is updated then it will not change the reference of the original object so that's why to reflect the change we have to copy the entire object after changing the member value
        */
       //since setMoves is a synchronous function that's why we have to use call back to execute it in order to avoid the unpredicted result 
     setMoves((prevMoves => {
        return {...moves, blue: moves.blue+1}
     }));
       
     };


     let moveRed = ()=>{
        setMoves((prevMoves)=>{
            return {...moves, red: moves.red + 1}
        })
     };

     let moveGreen = ()=>{
        setMoves((prevMoves)=>{
            return {...moves, green: moves.green + 1}
        })
     };

     let moveYellow = ()=>{
        setMoves((prevMoves)=>{
            return {...moves, yellow: moves.yellow + 1};
        })
     }

     return (
        <div>
        <p>Blue moves = {moves.blue}</p>
        <button style={{backgroundColor: "blue"}} onClick={moveBlue}>+1</button>
        <p>Green moves = {moves.green} </p>
        <button style={{backgroundColor: "green"}} onClick={moveGreen}>+1</button>
        <p>Yellow moves = {moves.yellow} </p>
        <button style={{backgroundColor: "yellow", color: 'black'}} onClick={moveYellow}>+1</button>
        <p>Red moves = {moves.red} </p>
        <button style={{backgroundColor: "red"}} onClick={moveRed}>+1</button>
        </div>
     );

}