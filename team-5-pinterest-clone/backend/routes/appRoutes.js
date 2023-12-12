const router = require("express").Router();
const appController = require("../controllers/appController");

router.get("/getAll", appController.getAllusers);
router.post("/login", appController.login);
router.post("/register", appController.register);
router.post("/logout", appController.logout);

module.exports = router;
