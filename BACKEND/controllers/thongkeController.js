const Docgia = require("../models/Docgia");
const NhanVien = require("../models/NhanVien");
const NhaXuatBan = require("../models/NhaXuatBan");
const QuanTriVien = require("../models/QuanTriVien");
const Sach = require("../models/Sach");
const TheoDoiMuonSach = require("../models/TheoDoiMuonSach");

exports.thongke = async (req, res) => {
  try {
    const docGiaCount = await Docgia.countDocuments();
    const nhanVienCount = await NhanVien.countDocuments();
    const nhaXuatBanCount = await NhaXuatBan.countDocuments();
    const quanTriVienCount = await QuanTriVien.countDocuments();
    const sachCount = await Sach.countDocuments();
    const theoDoiMuonSachCount = await TheoDoiMuonSach.countDocuments();

    const statistics = {
      docGiaCount,
      nhanVienCount,
      nhaXuatBanCount,
      quanTriVienCount,
      sachCount,
      theoDoiMuonSachCount,
    };

    res.json(statistics);
  } catch (error) {
    console.error("Error fetching statistics:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
