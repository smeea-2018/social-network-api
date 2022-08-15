const router = require("express").Router();

const {
  getAllFriends,
  getSingleFriend,
  addFriend,
  deleteFriend,
} = require("../../controllers/api/friends");

router.post("/:id", addFriend);
router.delete("/:id", deleteFriend);

module.exports = router;
