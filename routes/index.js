const Router = require("express");
const router = new Router();
const itemRouter = require("./itemRouter");

router.use("/item", itemRouter);

module.exports = router;
