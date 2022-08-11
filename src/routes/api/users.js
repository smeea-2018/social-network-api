const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/api/users");

const { addFriend } = require("../../controllers/api/friends");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/", deleteUser);
router.post("/", addFriend);

module.exports = router;
