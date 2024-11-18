import AmazonProduct from './AmazonProduct.jsx'
import './AmazonProduct.css'
import './AmazonTab.css'


export default function AmazonTab(){

    let oldPrice = ["23,00", "67,499", "54,870", "45,687"]
    let newPrice = ["73,970", "87,409", "98,770", "93,543"]
     return (
        <div className='AmazonTab'>
            <AmazonProduct title = "Logitech MS Master" description = "8,000 DPI" oldPrice = {oldPrice} newPrice = {newPrice} idx = {0}/>
            <AmazonProduct title = "Apple Pencil(2nd Gen)" description = "intuitive surface" oldPrice = {oldPrice} newPrice = {newPrice} idx = {1}/>
            <AmazonProduct title = "Zebronics Transformer" description = "Designed for ipad-Pro" oldPrice = {oldPrice} newPrice = {newPrice} idx = {2}/>
            <AmazonProduct title = "Petronics Toad Deal" description = "wireless" oldPrice = {oldPrice} newPrice = {newPrice} idx = {3}/>
        </div>
     )
 
}