const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/api/users");

const friends = require("../../controllers/api/friends");

const { addFriend, deleteFriend } = require("../../controllers/api/friends");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/:id/", addFriend);
router.delete("/:id/friends/:id", deleteFriend);

module.exports = router;
