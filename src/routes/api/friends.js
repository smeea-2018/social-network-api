const router = require("express").Router();

const friends = require("../../controllers/api/friends");

router.get("/", friends);
router.get("/:id", friends);
router.post("/:id", friends);
router.delete("/:id", friends);

module.exports = router;
