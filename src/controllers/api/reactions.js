// import { ObjectId } from "mongoose";
const { Thought } = require("../../models");
const { Reaction } = require("../../models/Reaction");

const addReaction = async (req, res) => {
  try {
    const { id } = req.params;

    const { reactionBody, userName } = req.body;
    console.log(id, reactionBody, userName);

    const thoughtToUpdate = await Thought.findByIdAndUpdate(id, {
      $push: { reactions: req.body },
    });

    return res.status(201).json({
      success: true,
      thoughtToUpdate,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to add reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to add reaction" });
  }
};

const deleteReaction = async (req, res) => {
  try {
    // const { reactionId } = req.params;
    const { reactionId } = req.body;
    console.log(reactionId);
    //   const updatedThought = await Thought.findByIdAndUpdate(
    //     id,
    //     {
    //       $pull: { reactions: { _id: reactionId } },
    //     },
    //     { returnDocument: "after" }
    //   );
    //   return res.status(201).json({
    //     success: true,
    //     data: updatedThought,
    //   });
    const deletedReaction = await Reaction.findOneAndDelete({
      _id: reactionId,
    });
    console.log(deletedReaction);
  } catch (error) {
    console.log(`[ERROR: Failed to delete reaction | ${error.message}]`);
    return res.status(500).json({
      success: false,
      error: "Failed to delete reaction",
    });
  }
};

module.exports = {
  addReaction,
  deleteReaction,
};
