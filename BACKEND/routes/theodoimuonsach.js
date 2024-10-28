const express = require("express");
const router = express.Router();
const theodoimuonsachController = require("../controllers/theodoimuonsachController");

router.post("/", theodoimuonsachController.createTheoDoiMuonSach);
router.get("/", theodoimuonsachController.getTheoDoiMuonSach);
router.put("/:id", theodoimuonsachController.updateTheoDoiMuonSach);
router.delete("/:id", theodoimuonsachController.deleteTheoDoiMuonSach);

module.exports = router;
