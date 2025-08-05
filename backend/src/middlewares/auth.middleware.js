import jwt from 'jsonwebtoken'


export const protectRoute=async(req,res,next)=>{
const token=req.cookies.token;
if(!token){
    res.status(401).json({message:"Not authorized"});
    return;
}
try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded;
    next();
} catch (error) {
    console.log("Error in auth middleware;",error.message);
    res.status(401).json({message:"Not authorized"})
        
    
}

}