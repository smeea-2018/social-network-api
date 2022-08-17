// const connectToDatabase = require("../../../config/connection");
const { User } = require("../../models");
const getAllUsers = async (req, res) => {
  try {
    // await connectToDatabase();
    const allUsers = await User.find({});
    return res.json({ success: true, allUsers });
  } catch (error) {
    console.log(`[ERROR]: Failed to get users | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to get users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userById = await User.findById(id);

    if (!userById) {
      console.log(`[ERROR]: User not found`);
      return res.status(404).json({ success: false, error: "Users not found" });
    }

    return res.json({ success: true, userById });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get user" });
  }
};

const createUser = async (req, res) => {
  try {
    const { userName, email } = req.body;
    const newUser = await User.create({
      userName,
      email,
    });
    return res.json({ success: true, newUser });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to create user" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email } = req.body;
    if (userName || email) {
      const updatedUser = await User.findByIdAndUpdate(id, { userName, email });
      return res.json({ success: true, updatedUser });
    } else {
      return res
        .status(500)
        .json({ success: false, error: "Failed to update user" });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to update user | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to update user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to delete user" });
  }
};

const getFriends = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const friendById = await User.findById(id);

    if (!friendById) {
      console.log(`[ERROR]: friend not found`);
      return res
        .status(404)
        .json({ success: false, error: "friend not found" });
    }

    return res.json({ success: true, friendById });
  } catch (error) {
    console.log(`[ERROR]: Failed to get friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get friend" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getFriends,
};
