//relatinship from one to many : storing the reference of child inside the parents




const mongoose = require('mongoose')
let {Schema} = mongoose;
async function main()
{
    mongoose.connect('mongodb://127.0.0.1:27017/mongoRelatioshshipsDemo')
}

main().then(()=>{
    console.log("Connection established")
}).catch((err)=>{
    console.log(err)
})

//defining order schema

let orderSchema = new mongoose.Schema({
    item: String,
    price: Number
})

//creating model for the itemSchema
let Order = mongoose.model("Order", orderSchema);

//defining Customer schema
let CustomerSchema = new Schema({
    name: {
        type: String
    },
    orderes: [
        {
            type: Schema.Types.ObjectId,  //type is objectId
            ref: "Order"   //reference is Order model
        }
    ]
})

//creating model for customer scema
let Customer = mongoose.model("Customer", CustomerSchema);

//function to insert document into Customer
/*
let addCustomer = async ()=>{

    let customer1 = new Customer({
        name: "Geet"
    });

    let order1 = await Order.findOne({item: "Samosa"});
    let order2 = await Order.findOne({item: "Coffee"});

    customer1.orderes.push(order1);          //note: even though we are pushing the entire order object but in actual database only only objectId will be stored because orderes is type of objectId in the customerSchema
    customer1.orderes.push(order2);

    //saving the document customer1

    let res = await customer1.save();
    console.log(res);
}


addCustomer();

*/

//using populate : it will replace the reference with the entire document 

let findCustomers = async ()=>{
    let Customers = await Customer.find({}).populate('orderes');
    console.log(Customers[0]);
}


findCustomers();



//function to insert documents in the items collection
/*
let addOrders = async ()=>{
  
 let res =  await Order.insertMany([
           {item : "Samosa", price : 10},
           {item : "Chips", price : 20},
           {item : "Coffee", price : 30}
 ]);

 console.log(res);
}

addOrders();
*/