const mongoose = require("mongoose");

const SachSchema = new mongoose.Schema({
  MaSach: { type: String, required: true, unique: true },
  TenSach: { type: String, required: true },
  DonGia: { type: Number, required: true },
  SoQuyen: { type: Number, required: true },
  NamXuatBan: { type: String, required: true },
  MaNXB: { type: String, required: true },
  NguonGoc: { type: String, required: true },
  TheLoai: { type: String, required: true },
  HinhAnh: { type: String, required: true },
});

module.exports = mongoose.model("Sach", SachSchema);
