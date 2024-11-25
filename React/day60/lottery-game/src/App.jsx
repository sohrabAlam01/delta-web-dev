
import './App.css'
import LotteryGame from './LotteryGame'
import TicketNum from './ticketNum'
import Ticket from './Ticket'
import { sum } from './helper'
function App() {
    
  //when sum is equal to 15
  let winCondition1 = (ticket)=>{      
      return sum(ticket) === 15;
  }

  //when each number is same 
  let winCondition2 = (ticket)=>{
      return ticket.every((num)=> num === ticket[0])
  }

  //when first number is 1
  let winCondition3 = (ticket)=>{
      return ticket[0] === 1;
  }

  return (
    <>
     {/* <LotteryGame n={5} winningSum={20}/> */}
     <LotteryGame n={5} winCondition = {winCondition1}/>
     <LotteryGame n={3} winCondition = {winCondition2}/>
     <LotteryGame n={5} winCondition = {winCondition3}/>
    </>
  )
}

export default App
