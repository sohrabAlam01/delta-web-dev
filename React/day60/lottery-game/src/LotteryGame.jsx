import { useState } from "react"
import './ticket.css'
import genTicket from "./helper"
export default function LotteryGame(){

    let [digits, setDigits] = useState(genTicket(3))

    return (
        <>
         <h1>Lottery Game</h1>
        <div className="title">
            <span>{digits[0]},</span> 
            <span>{digits[1]},</span> 
            <span>{digits[2]}</span> 
        </div>
        
        </>
       
    )
}