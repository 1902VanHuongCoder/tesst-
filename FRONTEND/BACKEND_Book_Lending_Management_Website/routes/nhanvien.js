const express = require("express");
const router = express.Router();
const nhanvienController = require("../controllers/nhanvienController");

router.post("/", nhanvienController.createNhanVien);
router.get("/", nhanvienController.getNhanVien);
router.put("/:id", nhanvienController.updateNhanVien);
router.delete("/:id", nhanvienController.deleteNhanVien);

// Login a NhanVien
router.post("/login", nhanvienController.loginNhanvien);

module.exports = router;
