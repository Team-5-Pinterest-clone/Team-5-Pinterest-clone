const router = require("express").Router();
const appController = require("../controllers/appController");

router.get("/getAll", appController.getAllusers);

module.exports = router;
