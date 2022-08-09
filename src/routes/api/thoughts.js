const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  postThought,
  updateThought,
  deleteThought,
  useThought,
} = require("../../controllers/api/thoughts");

router.get("/", getAllThoughts);
router.get("/:id", getSingleThought);
router.post("/", postThought);
router.put("/:id", updateThought);
router.delete("/:id", deleteThought);
router.use("", useThought);

module.exports = router;
