const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getFriends,
} = require("../../controllers/api/users");

const friends = require("../../controllers/api/friends");

const { addFriend, deleteFriend } = require("../../controllers/api/friends");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/friends/:id", addFriend);
router.delete("/friends/:id", deleteFriend);
router.get("/friends/:id", getFriends);

module.exports = router;
