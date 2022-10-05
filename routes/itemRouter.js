const Router = require("express");
const router = new Router();
const itemController = require("../controllers/itemController");

router.post("/", itemController.create);
router.get("/", itemController.getAll);
// router.delete("/elem/:id", itemController.deleteItem);

module.exports = router;
