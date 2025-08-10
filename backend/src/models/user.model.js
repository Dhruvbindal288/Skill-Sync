import mongoose from "mongoose";
//Schema for skill not making seperate scehma
const skillSubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: {
      type: String,
      enum: ["Programming", "Design", "Language", "Soft Skills", "Marketing"],
      required: true,
    },
  },
  { _id: false } 
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "../assets/defaultprofile.png" },
    bio: { type: String },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    want_to_learn: [skillSubSchema],
    want_to_teach: [skillSubSchema],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
