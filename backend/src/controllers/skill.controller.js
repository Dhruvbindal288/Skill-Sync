import User from "../models/user.model.js";
import ConnectionRequest from "../models/connectRequest.model.js";


export const addSkills = async (req, res) => {
  try {
    const userId = req.user._id;
    const { want_to_learn, want_to_teach } = req.body;

    // If nothing to add → just return user as is
    if (
      (!want_to_learn || want_to_learn.length === 0) &&
      (!want_to_teach || want_to_teach.length === 0)
    ) {
      const user = await User.findById(userId).select("-password");
      return res.status(200).json({
        message: "No new skills provided",
        user
      });
    }

    // Build update object dynamically
    const updateData = {};
    if (want_to_learn && Array.isArray(want_to_learn) && want_to_learn.length > 0) {
      updateData.want_to_learn = { $each: want_to_learn.map((s) => s.trim()) };
    }
    if (want_to_teach && Array.isArray(want_to_teach) && want_to_teach.length > 0) {
      updateData.want_to_teach = { $each: want_to_teach.map((s) => s.trim()) };
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: updateData },
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "Skills added successfully",
      user: updatedUser,
    });

  } catch (error) {
    console.error("Error in addSkills:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const deleteSkills = async (req, res) => {
  try {
    const userId = req.user._id;
    const { want_to_learn, want_to_teach } = req.body;

    // If nothing to delete → return user as is
    if (
      (!want_to_learn || want_to_learn.length === 0) &&
      (!want_to_teach || want_to_teach.length === 0)
    ) {
      const user = await User.findById(userId).select("-password");
      return res.status(200).json({
        message: "No skills provided to delete",
        user,
      });
    }

    // Build update object dynamically
    const updateData = {};
    if (want_to_learn && Array.isArray(want_to_learn) && want_to_learn.length > 0) {
      updateData.want_to_learn = { $in: want_to_learn.map((s) => s.trim()) };
    }
    if (want_to_teach && Array.isArray(want_to_teach) && want_to_teach.length > 0) {
      updateData.want_to_teach = { $in: want_to_teach.map((s) => s.trim()) };
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: updateData },
      { new: true }
    ).select("-password");

    res.status(200).json({
      message: "Skills removed successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in deleteSkills:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};






export const allUser=async(req,res)=>{
  try {
    let id=req.user._id
    const requests=await ConnectionRequest.find({ receiverId: id }).select("senderId")
       const senderIds = requests.map(req => req.senderId);
 const users = await User.find({ _id:  { $nin: [id, ...senderIds] } }).select("-password"); 
  res.status(200).json(users);


  } catch (error) {
       console.error("Error in allUsers",error.message);
    res.status(500).json({ message: "Server error" });
  }
}