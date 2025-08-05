import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilPic: { type: String, default: "../assets/defaultprofile.png" },
    bio:{type:String,required:true},
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

    want_to_learn: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
    want_to_teach: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  },


  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

export default User;
