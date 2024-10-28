const TheoDoiMuonSach = require("../models/TheoDoiMuonSach");

exports.createTheoDoiMuonSach = async (req, res) => {
  const newTheoDoiMuonSach = new TheoDoiMuonSach(req.body);
  try {
    const savedTheoDoiMuonSach = await newTheoDoiMuonSach.save();
    res.status(201).json(savedTheoDoiMuonSach);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTheoDoiMuonSach = async (req, res) => {
  try {
    const theodoimuonsach = await TheoDoiMuonSach.find();
    res.json(theodoimuonsach);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTheoDoiMuonSach = async (req, res) => {
  try {
    const updatedTheoDoiMuonSach = await TheoDoiMuonSach.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTheoDoiMuonSach);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTheoDoiMuonSach = async (req, res) => {
  try {
    await TheoDoiMuonSach.findByIdAndDelete(req.params.id);
    res.json({ message: "TheoDoiMuonSach deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
