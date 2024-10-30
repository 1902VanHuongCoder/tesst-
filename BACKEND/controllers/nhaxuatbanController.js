const NhaXuatBan = require("../models/NhaXuatBan");

exports.createNhaXuatBan = async (req, res) => {
  const { MaNXB, TenNXB, DiaChi } = req.body;
  console.log(req.body);
  const newNhaXuatBan = new NhaXuatBan({
    TenNXB,
    DiaChi,
    MaNXB,
  });

  try {
    await newNhaXuatBan.save();
    console.log("succes");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getNhaXuatBan = async (req, res) => {
  try {
    const nhaxuatban = await NhaXuatBan.find();
    res.json(nhaxuatban);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateNhaXuatBan = async (req, res) => {
  try {
    const updatedNhaXuatBan = await NhaXuatBan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedNhaXuatBan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteNhaXuatBan = async (req, res) => {
  try {
    await NhaXuatBan.findByIdAndDelete(req.params.id);
    res.json({ message: "NhaXuatBan deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
