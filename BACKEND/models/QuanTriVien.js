// models/Docgia.js
const mongoose = require("mongoose");
const QuanTriVienSchema = new mongoose.Schema({
  MaQuanTriVien: String,
  MatKhau: String,
  ChucVu: String,
});
module.exports = mongoose.model("QuanTriVien", QuanTriVienSchema);
