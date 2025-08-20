import User from "../models/user.model.js";
import ConnectionRequest from "../models/connectRequest.model.js";
export const addSkills = async (req, res) => {


try {
  const userId=req.user._id;
  if(hyy){}
} catch (error) {
  
}

};

export const deleteSkills = async (req, res) => {

};






export const allUser=async(req,res)=>{
  try {
    let id=req.user._id
    const requests=await ConnectionRequest.find({ receiverId: id }).select("senderId")
       const senderIds = requests.map(req => req.senderId);
 const users = await User.find({ _id:  { $nin: [id, ...senderIds] } }).select("-password"); 
  res.status(200).json(users);


  } catch (error) {
       console.error("Error in allUsers",error.message);
    res.status(500).json({ message: "Server error" });
  }
}