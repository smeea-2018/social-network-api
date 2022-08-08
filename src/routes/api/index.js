const router = require("express").Router();

const friends = require("./friends");
const reactionsRoutes = require("./reactions");
const thoughtsRoutes = require("./thoughts");
const usersRoutes = require("./users");

router.use("/friends", friends);
router.use("/reaction", reactionsRoutes);
router.use("/thoughts", thoughtsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
