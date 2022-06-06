const express = require("express");
const { registerUser, authUser } = require("../controllers/user-controller");
// const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
// router.get("/home", protect, allUsers);

module.exports = router;

