const express = require("express");
const router = express.Router();
const sachController = require("../controllers/sachController");

router.post("/", sachController.createSach);
router.get("/", sachController.getSach);
router.put("/:id", sachController.updateSach);
router.delete("/:id", sachController.deleteSach);

module.exports = router;
