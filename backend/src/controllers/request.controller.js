import ConnectionRequest from "../models/connectRequest.model.js";
import User from "../models/user.model.js";

export const sendRequest = async (req, res) => {
  const senderId = req.user._id;
  const { id: receiverId } = req.params;
  try {
    const receiver = await User.findById(receiverId);
    if (!receiver) return res.status(400).json({ message: "Person not found" });

    if (senderId === receiverId)
      return res
        .status(400)
        .json({ message: "You cannot send request to yourself" });

    const existingRequest = await ConnectionRequest.findOne({
      senderId,
      receiverId,
    });

    if (existingRequest) {
      return res.status(400).json({ message: "Request already sent" });
    }

    const request = new ConnectionRequest({
      senderId,
      receiverId,
      status: "Pending",
    });
    await request.save();
    res.status(201).json({ message: "Connection request sent", request });
  } catch (error) {
    console.log("Error in sendRequest:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const respondToRequest = async (req, res) => {
  try {
    const { action } = req.body;
    const { id: requestId } = req.params;
    const userId = req.user._id;

    const request = await ConnectionRequest.findById(requestId);

    if (!userId) return res.status(404).json({ message: "User not found" });

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }
    if (request.status !== "Pending") {
      return res
        .status(400)
        .json({ message: "This request has already been processed" });
    }

    if (action === "accept") {
      request.status = "Accepted";

      await User.findByIdAndUpdate(request.senderId, {
        $push: { connections: request.receiverId },
      });
      await User.findByIdAndUpdate(request.receiverId, {
        $push: { connections: request.senderId },
      });
    } else if (action === "reject") {
      request.status = "Rejected";
    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    await request.save();
    res
      .status(200)
      .json({ message: `Request ${action}ed successfully`, request });
  } catch (error) {
    console.log("Error in respondToRequest:", error.message);
    res.status(500).json({ message: "Server error..Please try again later." });
  }
};

export const getAllRequest = async (req, res) => {
  try {
    const userId = req.user._id;

    const requests = await ConnectionRequest.find({
      receiverId: userId,status:"Pending"
    }).populate("senderId", "name bio profilePic");
    if(requests.length===0) return res.status(404).json({message:"No request"})

    res.status(200).json(requests);
  } catch (error) {
    console.log("Error in getAllRequest:", error.message);
    res.status(500).json({ message: "Server Error..Please try again later" });
  }
};
