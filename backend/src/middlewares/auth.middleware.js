import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const protectRoute=async(req,res,next)=>{
const token=req.cookies.token;
if(!token){
    res.status(401).json({message:"Not authorized"});
    return;
}
try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user = { id: decoded._id };
const user = await User.findById(req.user.id).select('-password');
res.status(200).json(user)   
next();
} catch (error) {
    console.log("Error in auth middleware;",error.message);
    res.status(401).json({message:"Not authorized"})
        
    
}

}