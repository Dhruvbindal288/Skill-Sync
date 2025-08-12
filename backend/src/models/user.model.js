import mongoose from "mongoose";
//Schema for skill not making seperate scehma
const skillSubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { _id: false } 
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "../assets/defaultprofile.png" },
  
  want_to_learn: [skillSubSchema],
    want_to_teach: [skillSubSchema],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
