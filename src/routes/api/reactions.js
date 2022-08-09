const router = require("express").Router();
const {
  addReaction,
  deleteReaction,
} = require("../../controllers/api/reactions");

router.post("/", addReaction);
router.delete("/:id", deleteReaction);

module.exports = router;
