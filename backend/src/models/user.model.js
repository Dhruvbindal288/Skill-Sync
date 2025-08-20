import mongoose from "mongoose";
//Schema for skill not making seperate scehma


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "../assets/defaultprofile.png" },
    bio:{type:String},
    want_to_learn: {type:[String],default:[]},
    want_to_teach: {type:[String],default:[]},
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
