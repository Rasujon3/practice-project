const express = require("express");
const ProfileController = require("../controllers/ProfileController");
const router = express.Router();

// route add
router.post("/CreateProfile", ProfileController.CreateProfile);
module.exports = router;
