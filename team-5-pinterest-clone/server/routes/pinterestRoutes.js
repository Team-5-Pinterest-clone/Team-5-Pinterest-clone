const router = require("express").Router();
const pinterestController = require("../controllers/pinterestController");

router.get("/getAll", pinterestController.getAllUsers);

module.exports = router;
