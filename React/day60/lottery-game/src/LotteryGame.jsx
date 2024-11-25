import { useState } from "react"
import './ticket.css'
import {genTicket, sum} from "./helper"
import Ticket from "./Ticket"
import Button from "./Button"
export default function LotteryGame({n=3, winCondition}){

    let [digits, setDigits] = useState(genTicket(n));
    
    let isWinning = winCondition(digits);

    let buyTicket = ()=>{
             setDigits(genTicket(n));
    }

    return (
        <>
         <h1>Lottery Game</h1>
           <Ticket ticket = {digits}/>
        <h1>{isWinning && "Oyo you won!"}</h1>
         <Button action = {buyTicket}/>
        </>
       
    )
}