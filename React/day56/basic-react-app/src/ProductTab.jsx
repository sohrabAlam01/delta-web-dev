import Product from "./Product.jsx"

function ProductTab() {

  //passsing array and object as props
  let options = [<li>duearion</li>, <li>Hi-tech</li>, <li>best</li>];
  let options2 = { a: "Durable", b: "Hi-tech", c: "Best sellor" };

  return (

    <>
      <Product title="Phone"
       description="This is a good phone"
        price={1000} features={options} 
        features2={options2} 
        features3={["Durable", "Luxury"]} 
        features4={{ a: "Durable", b: "Costly" }}
      ></Product>
      <Product title="Laptop" description="This is a good Laptop" price={500} features2={options2}></Product>

      {/* //we can write this way */}
      <Product title="Phone" description="This is a good phone" />
    </>
  )
}

export default ProductTab;    