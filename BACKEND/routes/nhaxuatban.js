const express = require("express");
const router = express.Router();
const nhaxuatbanController = require("../controllers/nhaxuatbanController");

router.post("/", nhaxuatbanController.createNhaXuatBan); 
router.get("/", nhaxuatbanController.getNhaXuatBan);
router.put("/:id", nhaxuatbanController.updateNhaXuatBan);
router.delete("/:id", nhaxuatbanController.deleteNhaXuatBan);

module.exports = router; 
