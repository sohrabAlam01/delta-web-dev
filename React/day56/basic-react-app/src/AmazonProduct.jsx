import AmazonPrice from './AmazonPrice.jsx';
import "./AmazonProduct.css"

const AmazonProduct = ({title, description, oldPrice, newPrice, idx}) => {
          return (
            <div className='AmazonProduct'>
                <h3>{title}</h3>
                <p>{description}</p>
                 <AmazonPrice oldPrice = {oldPrice} newPrice = {newPrice} idx = {idx}/>
            </div>
          )
}

export default AmazonProduct;