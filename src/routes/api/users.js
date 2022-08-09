const router = require("express").Router();
const users = require("../../controllers/api/users");

router.get("/", users);
router.get("/:id", users);
router.post("/", users);
router.put("/:id", users);
router.delete("/", users);

module.exports = router;
