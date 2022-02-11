const express = require("express");
const router = express.Router();
const user = require("../controller/user");


router.post("/login", user.login);

router.post("/register", user.register);

router.get("/users", user.isSignedIn, user.findAll);

module.exports = router;