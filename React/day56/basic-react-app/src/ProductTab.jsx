import Product from "./Product.jsx"

function ProductTab() {

  //passsing array and object as props
  let options = [<li>duearion</li>, <li>Hi-tech</li>, <li>best</li>];
  const options2 = { 
    a: "Durable", 
    b: "Hi-tech", 
    c: "Best sellor" 
  };

  const userObject = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };

  return (

    <>
      <Product index = {1} title="Phone"
       description="This is a good phone"
        price={100000} features={options} 
        features2={options2} 
        features3={["Durable", "Luxury"]} 
        features4={{ a: "Durable", b: "Costly" }}
      />
      <Product index = {2} title="Laptop"
       description="This is not a good phone"
        price={10000} features={options} 
        features2={options2} 
        features3={["Durable", "Luxury"]} 
        features4={{ a: "Durable", b: "Costly" }}
      />


    </>
  )
}

export default ProductTab;  


//note:  to render or pass object or map function always use <product/> tag not <product></product>
// return (
//   <div>
//     <h1>Welcome to the App</h1>
//     {/* Pass object as a prop */}
//     <UserDetails user={userObject} />
//   </div>
// );