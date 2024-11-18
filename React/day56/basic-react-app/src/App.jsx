
import './App.css'

import {Title1, Title2} from "./Title.jsx"
import ProductTab from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx';
import AmazonProduct from './AmazonTab.jsx'
function App() {

  return (
    <>
      {/* <Title1/>
      <Title2/>
      <p>Hi, {name}</p>
      <p>Hi, {name.toUpperCase()}</p>
      <p> 2*2 = {2*2}</p> */}
       
      {/* <MsgBox userName = "Muskan" clr = "green"/>
      <MsgBox userName = "Sohrab" clr = "blue"/>
      <ProductTab></ProductTab> */}
     <h2>Blockbuster Deals || Shop now</h2>
      <AmazonProduct/>

    </>
  )

}

export default App
