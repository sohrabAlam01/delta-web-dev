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
//applying conditonal styling
//note: in css we write in hiphen based styles like: backgroundColor: 'blue' but in jsx we write the same thing in camel case like: backgroundColor: 'blue

// another way to get title and description 
const Product = ({ title, description, price = 1, features, index, features2, features3, features4 }) => {

    if(price > 100) {

        // applying conditional styling
        let styles = {backgroundColor: price>10000 ? 'yellow' : ""}
    return (
        
        <div className="Product">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h4>{price}</h4>
          {/* conditional */}

            <p>{features}</p>
            <p style={styles}>
               {features3.map((feature, index) => (
                 <li key={index}>{feature}</li>
            ))}
            </p>

            {price > 10000 ? <p>10% more discount</p> : null}
            {/* 0r */}
            {price > 1000 && <p>amazing offers</p>}
        </div>
            

    )
}

}
// const Product = ({ user }) => {
//     return (
//       <div>
//         <h2>User Details</h2>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Age:</strong> {user.age}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//       </div>
//     );
//   };

export default Product;