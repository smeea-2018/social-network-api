const connectToDatabase = require("../../../config/connection");
const { User } = require("../../models");
const getAllUsers = async (req, res) => {
  try {
    await connectToDatabase();
    const allUsers = await User.find({});
    console.log("all users: " + allUsers);
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
    const { id } = req.param;
    const userById = await User.findById({ id });
    console.log(userById);

    if (!userById) {
      console.log(`[ERROR]: User not found`);
      return res.status(404).json({ success: false, error: "User not found" });
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
    console.log("user created");
    console.log(newUser);
    return res.json({ success: true, newUser });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to create user" });
  }
};

const updateUser = (req, res) => {
  try {
    const { userName, email } = req.body;

    if (userName || email) {
      User.findByIdAndUpdate(id, { userName, email }, update);
      console.log("user updated");
    } else {
      console.log("Can't update user");
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
    const { id } = req.param;
    // if (!name) {
    //   console.log(`[ERROR]: User not found`);
    //   return res
    //     .status(404)
    //     .json({ success: false, error: "Friend not found" });
    // }
    await User.findByIdAndDelete(id);
    console.log("user deleted");
  } catch (error) {
    console.log(`[ERROR]: Failed to delete user | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to delete user" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
