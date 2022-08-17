const router = require("express").Router();
const {
  addReaction,
  deleteReaction,
} = require("../../controllers/api/reactions");

router.post("/:id", addReaction);
router.delete("/", deleteReaction);

module.exports = router;
