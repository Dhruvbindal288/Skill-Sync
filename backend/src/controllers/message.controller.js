import User from "../models/user.model.js";
import Message from "../models/message.model.js";


export const getMessages=async(req,res)=>{
const senderId=req.user._id;
const {id:receiverId}=req.params;
try {
    const message=await Message.findOne({
        $or:[
            {senderId:senderId,receiverId:receiverId},
              {senderId:receiverId,receiverId:senderId}
        ]
    })

    res.status(200).json(message)
} catch (error) {
    console.log("error in getMessages controller",error.message);
    res.status(500).json({message:"Internal server error"})
}

}










export const sendMessage=async(req,res)=>{
try {
    const {message}=req.body
    const{id:receiverId}=req.params
const senderId=req.user._id;

if(senderId===receiverId) return res.status(400).json({message:'you cant message yourself'});
 const receiver=await User.findById(receiverId);

 if(!receiver) return res.status(404).json({message:'Reciever does not exists'});

if(!receiver.connections.includes(senderId))  return res.status(403).json({message:'You both are not a connected'});
 
if(!message) return res.status(400).json({message:"You must type something before Sending"})

const newMessage= new Message({
    senderId:senderId,
    receiverId:receiverId,
    message:message
}
   
)
await newMessage.save();
 res.status(201).json(newMessage);
} catch (error) {
    console.log("error in sendMessage:",error.message);
    res.status(500).json({message:'Internal Server error'})
}

 
}