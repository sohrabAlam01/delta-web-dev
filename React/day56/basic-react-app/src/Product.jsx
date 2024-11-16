import "./Product.css"

// since props is an object 
// function Product(props){       

//     return (
//        <div className="Product">
//                    <h2>{props.title}</h2>
//                    <h4>{props.description}</h4>
//                      <h4>{props.price}</h4>
//        </div>


//     )

// }

// another way to get title and description 
function Product({ title, description, price = 1, features, features2, features3, features4 }) {

    return (
        
        <div className="Product">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h4>{price}</h4>
            <p>{features}</p>
            <p>
               {features3.map((feature) => (
                <li>{feature}</li>
            ))}
            </p>
        </div>


    )

}


export default Product;