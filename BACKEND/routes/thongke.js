const express = require("express");
const router = express.Router();
const thongkeController = require("../controllers/thongkeController");

router.get("/", thongkeController.thongke);

module.exports = router;
