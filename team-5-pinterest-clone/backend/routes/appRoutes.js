const router = require("express").Router();
const appController = require("../controllers/appController");

router.get("/getAll", appController.getAllusers);
router.post("/login", appController.login);
router.post("/register", appController.register);
router.post("/logout", appController.logout);
//////rahma////////////////////////////////

// GetAll routes
router.get("/getAllUsers", appController.getAllusers);
router.get("/getAllSaved", appController.getAllSaved);
router.get("/getAllPosts", appController.getAllPosts);
router.get("/getAllComments", appController.getAllComments);
router.get("/getUser/:id", appController.getUser);

// Get one routes
router.get("/getOneUserid/:id", appController.getOneUserById);
router.get("/getOneUser/:username", appController.getOneUser);
router.get("/getOnePost/:id", appController.getOnePost);
router.get("/getOneComment/:id", appController.getOneComment);
router.get("/getByIdUsers/:id", appController.getOneSavedByIdUsers);
router.get("/getByIdSaved/:id", appController.getOneSavedByIdSaved);
router.get("/getComments/:id", appController.getComments);

// Update routes
router.put("/updateUsername/:id", appController.updateUsername);
router.put("/updateUserEmail/:id", appController.updateUserEmail);
router.put("/updateUserBio/:id", appController.updateUserBio);
router.put("/updateUserPassword/:id", appController.updateUserPassword);
router.put("/updatePostDes/:id", appController.updatePostDescription);
router.put("/updatePostCat/:id", appController.updatePostCategories);
router.put("/updatePostphoto/:id", appController.updatePostphoto);
router.put("/updateComment/:id", appController.updateCommentBody);
router.put("/updateUser/:id", appController.updateUser);

// Delete routes
router.delete("/deleteSaved/:id", appController.deleteSaved);
router.delete("/deletePost/:id", appController.deletePost);
router.delete("/deletePost/:id", appController.deletePost);
router.delete("/deleteComment/:id", appController.deleteComment);

// Create routes

router.post("/createUser", appController.createUser);
router.post("/addPost", appController.addPost);
router.post("/addComment", appController.addComment);

// Search routes
router.post(
  "/searchByCategories/:categories",
  appController.searchByCategories
);
router.post("/searchByUsername/:username", appController.searchByUsername);

//////rahma////////////////////////////////
module.exports = router;
