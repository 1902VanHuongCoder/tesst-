const mongoose = require("mongoose");

const NhanVienSchema = new mongoose.Schema({
  MSNV: { type: String, required: true, unique: true },
  HoTenNV: { type: String, required: true },
  ChucVu: { type: String, required: true },
  DiaChi: { type: String, required: true },
  DienThoai: { type: String, required: true },
  MatKhau: { type: String, required: true },
});

module.exports = mongoose.model("NhanVien", NhanVienSchema);
