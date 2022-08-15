// import { ObjectId } from "mongoose";
const { Thought, Reaction } = require("../../models");

const addReaction = async (req, res) => {
  try {
    const { id } = req.params;

    const { reactionBody, userName } = req.body;
    console.log(id, reactionBody, userName);

    if (reactionBody) {
      const thoughtToUpdate = await Thought.findByIdAndUpdate(id, {
        $push: { reactions: reactionBody },
      });
    } else {
      console.log(`[ERROR]: Failed to add reaction | ${error.message}`);
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to add reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to add reaction" });
  }

  console.log("reaction displayed");
};

const deleteReaction = async (req, res) => {
  try {
    const { id, reactionId } = req.params;

    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $pull: { reactions: { reactionId } },
      },
      { returnDocument: "after" }
    );
    return res.status(201).json({
      success: true,
      data: updatedThought,
    });
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
