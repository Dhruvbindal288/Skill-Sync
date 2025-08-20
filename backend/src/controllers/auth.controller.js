import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwttoken from "jsonwebtoken";
import cloudinary from '../lib/cloudinary.js'

export const signUpuser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password)
      return res.status(400).json({ message: 'Enter all fields' });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwttoken.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error('Error in signup controller:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }

};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Enter all fields' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }


    const token = jwttoken.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });


    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    
    });
  } catch (error) {
    console.error('Error in login controller:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logged out successfully" });
};


export const checkAuth=async(req,res)=>{
  try {
    res.status(200).json({user:req.user,success: true})
  } catch (error) {
    console.log("error in checkAuth:",error,message)
  }
}


export const updateProfile=async(req,res)=>{
let {profilePic}=req.body;
try {
if(!profilePic) return res.status(400).json({message:"Please select profilepic"})
   const userId = req.user._id;
 const uploadResponse= await cloudinary.uploader.upload(profilePic);

 const updateduser=await User.findByIdAndUpdate(userId,{profilePic:uploadResponse.secure_url},{new:true,select: '-password'});
res.status(200).json(updateduser)

} catch (error) {
  console.log("Error in updateProfile",error.message);
  res.status(500).json({message:"Internal server error "})
}
}


export const completeprofile = async (req, res) => {
  const userId = req.user._id;
  let { want_to_teach, want_to_learn,bio } = req.body;

  try {
  
    if (!want_to_learn || !want_to_teach ||!bio) {
      return res.status(400).json({ message: 'Please enter all fields' });
    }

    if (!Array.isArray(want_to_learn) || !Array.isArray(want_to_teach)) {
      return res.status(400).json({ message: 'Both want_to_learn and want_to_teach must be arrays' });
    }

   
    if (want_to_learn.length === 0 || want_to_teach.length === 0) {
      return res.status(400).json({ message: 'Both fields must contain at least one skill' });
    }

    
    const updateData = {
      want_to_learn,
      want_to_teach,
      bio
    };

    
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    ).select("-password");



    res.status(200).json({
      message: 'Skills added successfully',
      user: updatedUser
    });

  } catch (error) {
    console.error("Error in completeProfile:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const deleteUser=async(req,res)=>{
  try {
    let userId=req.user._id();

    const deletedUser=await User.findByIdAndDelete(userId)

    res.status(201).json({message:"User Account Deleted"},deletedUser);
  } catch (error) {
    console.log("Error in deletedUsed:",error.message);
    res.status(500).json({message:"Internal Server Error"});
  }
}

