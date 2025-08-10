import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: {
    type: String,
    enum: ["Programming", "Design", "Language", "Soft Skills", "Marketing"],
    required: true,
  },
});
 
const Skill = mongoose.model("Skills", skillSchema);

export default Skill; 
