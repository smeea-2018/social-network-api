const router = require("express").Router();
const reactions = require("../../controllers/api/reactions");

router.post("/", reactions);
router.delete("/:id", reactions);
router.put("/:id", reactions);
module.exports = router;
