const Sach = require("../models/Sach");

exports.createSach = async (req, res) => {
  const newSach = new Sach(req.body);
  try {
    const savedSach = await newSach.save();
    res.status(201).json(savedSach);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSach = async (req, res) => {
  try {
    const sach = await Sach.find();
    res.json(sach);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSach = async (req, res) => {
  try {
    const updatedSach = await Sach.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedSach);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSach = async (req, res) => {
  try {
    await Sach.findByIdAndDelete(req.params.id);
    res.json({ message: "Sach deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
