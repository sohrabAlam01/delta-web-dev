//this file is to store the sample data in the database
const mongoose = require('mongoose')
const Chat = require("./models/chat.js")
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then((res) => {
    console.log("connection successfull");
}).catch((err) => {
    console.log(err)
})


let chats = [
    {
        from: "Riya",
        to: "khushi",
        msg: "come over dear",
        created_at: new Date()
    },
    {
        from: "ujjwal",
        to: "mamta",
        msg: "send me some notes of yours",
        created_at: new Date()
    },
    {
        from: "Geet",
        to: "Sohrab",
        msg: "hello kaise ho",
        created_at: new Date()
    },
    {
        from: "khushi",
        to: "riya",
        msg: "i wanna meet you right now",
        created_at: new Date()
    }
];

Chat.insertMany(chats);