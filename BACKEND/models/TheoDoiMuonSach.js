const mongoose = require("mongoose");

const TheoDoiMuonSachSchema = new mongoose.Schema({
  MaDocGia: { type: String, required: true },
  MaSach: { type: String, required: true },
  NgayMuon: { type: Date, required: true },
  NgayTra: { type: Date, required: true },
});

module.exports = mongoose.model("TheoDoiMuonSach", TheoDoiMuonSachSchema);
