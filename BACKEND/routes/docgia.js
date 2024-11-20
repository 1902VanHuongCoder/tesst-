const express = require("express");
const router = express.Router();
const docgiaController = require("../controllers/docgiaController");

// Create a new Docgia
router.post("/", docgiaController.createDocgia);

// Get all Docgia
router.get("/", docgiaController.getDocgia);

// Update a Docgia by ID
router.put("/:id", docgiaController.updateDocgia);

// Delete a Docgia by ID
router.delete("/:id", docgiaController.deleteDocgia);

// Login a Docgia
router.post("/login", docgiaController.loginDocgia);

// Get a Docgia by MaDocGia
router.get("/:maDocGia", docgiaController.getDocgiaByMaDocGia);

module.exports = router;
