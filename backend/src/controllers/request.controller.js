import ConnectionRequest from '../models/connectRequest.model.js'
import User from '../models/user.model.js';


export const sendRequest=async(req,res)=>{
    const senderId=req.user._id;
    const {receiverId}=req.body;
try {
const receiver=await User.findById(receiverId)
if(!receiver) return res.status(400).json({message:"Person not found"})

    if(senderId===receiverId) return res.status(400).json({message:"You cannot send request to yourself"})
 const existingRequest = await ConnectionRequest.findOne({
      senderId,
      receiverId
    });

    if (existingRequest) {
      return res.status(400).json({ message: "Request already sent" });
    }

     const request = new ConnectionRequest({
      senderId,
      receiverId,
      status: "Pending",
    });
    await request.save();
     res.status(201).json({ message: "Connection request sent", request });

} catch (error) {
    console.log("Error in sendRequest:",error.message);
     res.status(500).json({ message: "Server error"});
}

}