const express = require("express");
const router = express.Router();
const quantrivienController = require("../controllers/quantrivienController");

router.post("/login", quantrivienController.login);
router.post("/signup", quantrivienController.signup);

module.exports = router;
