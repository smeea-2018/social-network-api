const connectToDatabase = require("../../../config/connection");
const { Thought } = require("../../models");

const getAllThoughts = () => {
  try {
    await connectToDatabase();
    const getAllThoughts = await Thought.find({});
    console.log("all thoughts: " + getAllThoughts);
    return res.json({ success: true, getAllThoughts});
  } catch (error) {
    console.log(`[ERROR]: Failed to get thoughts | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to get thoughts" });
  }
};

const getSingleThought = () => {
  try {
    const { id } = req.param;
    const thoughtById = await Thought.findById({ id });
    console.log(thoughtById);

    if (!thoughtById) {
      console.log(`[ERROR]: Thought not found`);
      return res.status(404).json({ success: false, error: "Thought not found" });
    }

    return res.json({ success: true, thoughtById });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought" });
  }
};
const postThought = () => {
   try {
    const { userName, thoughtText} = req.body;
    const newThought = await Thought.create({
      userName,
      thoughtText,
    });
    console.log("thought created");
    console.log(newThought);
    return res.json({ success: true, newThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create thought | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to create thought" });
  }
};
const updateThought = () => {
    try {
      const{id} =req.param
      const { userName, thoughtText } = req.body;

    if (userName || thoughtText) {
      Thought.findByIdAndUpdate(id, { userName, thoughtText }, update);
      console.log("thought updated");
    } else {
      console.log("Can't update thought");
      return res
        .status(500)
        .json({ success: false, error: "Failed to update thought" });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to update thought | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to update thought" });
  }
};

const deleteThought = () => {
  try {
    const { id } = req.param;
    // // if (!name) {
    // //   console.log(`[ERROR]: thought not found`);
    // //   return res
    // //     .status(404)
    // //     .json({ success: false, error: "Friend not found" });
    // }
    await Thought.findByIdAndDelete( id );
    console.log("Thought deleted");
  } catch (error) {
    console.log(`[ERROR]: Failed to delete thought | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to delete thought" });
  }
};

const useThought = () => {
  console.log("use thought");
};

module.exports = {
  getAllThoughts,
  getSingleThought,
  postThought,
  updateThought,
  deleteThought,
  useThought,
};
