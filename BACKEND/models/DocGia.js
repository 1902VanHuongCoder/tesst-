// models/Docgia.js
const mongoose = require("mongoose");
const DocgiaSchema = new mongoose.Schema({
  MaDocGia: String,
  HoLot: String,
  Ten: String,
  NgaySinh: Date,
  Phai: String,
  DiaChi: String,
  DienThoai: String,
  MatKhau: String,
});
module.exports = mongoose.model("Docgia", DocgiaSchema);
