const router = require("express").Router();
const thoughts = require("../../controllers/api/thoughts");

router.get("/", thoughts);
router.get("/:id", thoughts);
router.post("/", thoughts);
router.put("/:id", thoughts);
router.delete("/", thoughts);
module.exports = router;
