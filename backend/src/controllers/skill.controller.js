import User from "../models/user.model.js";

export const updateSkills = async (req, res) => {
  const userId = req.user.id;
  const { want_to_learn, want_to_teach, new_skill_to_learn,new_skill_to_teach } = req.body;

  const updatedWantToLearn = new_skill_to_learn ? [...want_to_learn, new_skill_to_learn] : want_to_learn;
    const updatedWantToTeach = new_skill_to_teach ? [...want_to_teach, new_skill_to_teach] : want_to_teach;
  let updatedData = { 
    want_to_learn: updatedWantToLearn,
    want_to_teach: updatedWantToTeach };
  let user = await User.findByIdAndUpdate(userId, { $set: updatedData }, { new: true, select: '-password' });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
     res.status(200).json({
      message: 'Skills updated successfully',
      user: user,
    });

};

export const deleteSkills = async (req, res) => {
  const userid = req.user.id;
};



export const updateSkill = async (req, res) => {
  try {
    const userId = req.user._id; // better use _id
    const { want_to_learn = [], want_to_teach = [], new_skill_to_learn, new_skill_to_teach } = req.body;

    
    const updatedWantToLearn = new_skill_to_learn ? [...want_to_learn, new_skill_to_learn] : want_to_learn;
    const updatedWantToTeach = new_skill_to_teach ? [...want_to_teach, new_skill_to_teach] : want_to_teach;

    const updatedData = {
      want_to_learn: updatedWantToLearn,
      want_to_teach: updatedWantToTeach,
    };

    const user = await User.findByIdAndUpdate(userId, { $set: updatedData }, { new: true, select: '-password' });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Skills updated successfully',
      user,
    });
  } catch (error) {
    console.error("Error updating skills:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
