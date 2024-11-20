const mongoose = require("mongoose");

const TheoDoiMuonSachSchema = new mongoose.Schema({
  MaDocGia: { type: String, required: true },
  MaSach: { type: String, required: true },
  SoLuong: { type: Number, required: true },
  NgayMuon: { type: Date, required: true },
  NgayTra: { type: Date, required: false },
  TrangThai: { type: Boolean, required: false },
  HinhThucNhanSach: { type: String, required: true },
});

module.exports = mongoose.model("TheoDoiMuonSach", TheoDoiMuonSachSchema);
