import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilPic: { type: String, default: "../assets/defaultprofile.png" },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    want_to_learn: [{ type: String, name: { type: String, required: true, unique: true },
  category: {
    type: String,
    enum: ["Programming", "Design", "Language", "Soft Skills", "Marketing"],
    required: true,
  } }],
   want_to_teach: [{ type: String, name: { type: String, required: true, unique: true },
  category: {
    type: String,
    enum: ["Programming", "Design", "Language", "Soft Skills", "Marketing"],
    required: true,
  } }],
  },

  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

export default User;
