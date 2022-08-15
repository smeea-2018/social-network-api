const { Thought } = require("../../models");

const addReaction = async (req, res) => {
  //    try {
  //     const { id } = req.params;
  //     const {reactionBody, userName} = req.body
  //     const addReaction = await Thought.findByIdAndDelete(id);
  //     return res.json({ success: true, deletedThought });
  //   } catch (error) {
  //     console.log(`[ERROR]: Failed to delete thought | ${error.message}`);
  //     return res
  //       .status(500)
  //       .json({ success: false, error: "Failed to delete thought" });
  //   }
  // };
  //   console.log("reaction displayed");
};

const deleteReaction = () => {
  console.log("reaction deleted");
};

module.exports = {
  addReaction,
  deleteReaction,
};
