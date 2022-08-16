// import { ObjectId } from "mongoose";
const { Thought } = require("../../models");

const addReaction = async (req, res) => {
  try {
    const { id } = req.params;

    const { reactionBody, userName } = req.body;
    console.log(id, reactionBody, userName);

    // const newReaction = await Reaction.create({ reactionBody, userName });
    // console.log(newReaction);
    // const reactionId = newReaction.id;

    const thoughtToUpdate = await Thought.findByIdAndUpdate(id, {
      $push: { reactions: req.body },
    });

    console.log("reaction added");
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

  console.log("reaction displayed");
};

const deleteReaction = async (req, res) => {
  try {
    const { id, reactionId } = req.params;

    const updatedThought = await Thought.findByIdAndUpdate(
      id,
      {
        $pull: { reactions: { _id: reactionId } },
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
