const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main().then((res)=>{
    console.log("connection successfull")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/whatsapp')
}

allchats=[{
    from:"neha",
    to:"priya",
    msg:"send me your exam sheet",
    create_at:new Date()
},{
    from:"sneha",
    to:"priya",
    msg:"send me your exam sheet22",
    create_at:new Date()
},{
    from:"eha",
    to:"iya",
    msg:"blah",
    create_at:new Date()
},{
    from:"ahana",
    to:"priya",
    msg:" exam sheet",
    create_at:new Date()
},{
    from:"gold",
    to:"goldie",
    msg:"send",
    create_at:new Date()
},]

Chat.insertMany(allchats);

