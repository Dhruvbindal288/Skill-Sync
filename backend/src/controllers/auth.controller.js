import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwttoken from "jsonwebtoken";
export const signUpuser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.json({ message: "User exists" });

    const hashedpassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      email,
      password: hashedpassword,
    });
    await user.save();
    res.status(200).json({message:'User created Successfully'})
    const token = jwttoken.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "Production",
      maxAge:7*24*60*60*1000
    });
  } catch (error) {
    res.status(400).json({message:"Internal Server Error"});
    console.log("Error in signup controller:",error.message)
  }
};
