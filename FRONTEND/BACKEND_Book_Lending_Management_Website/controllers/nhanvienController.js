const NhanVien = require("../models/NhanVien");
const bcrypt = require("bcrypt");

exports.createNhanVien = async (req, res) => {
  const newNhanVien = new NhanVien(req.body);
  try {
    const savedNhanVien = await newNhanVien.save();
    res.status(201).json(savedNhanVien);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getNhanVien = async (req, res) => {
  try {
    const nhanvien = await NhanVien.find();
    res.json(nhanvien);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateNhanVien = async (req, res) => {
  try {
    const updatedNhanVien = await NhanVien.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedNhanVien);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteNhanVien = async (req, res) => {
  try {
    await NhanVien.findByIdAndDelete(req.params.id);
    res.json({ message: "NhanVien deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login a NhanVien
exports.loginNhanvien = async (req, res) => {
  try {
    const { DienThoai, MatKhau } = req.body;
    const nhanvien = await NhanVien.findOne({ DienThoai });

    const hashedPassword = await bcrypt.hash(MatKhau, 10);
    console.log("Pw người dun nhap de dang nhap: " + hashedPassword);
    console.log("Pw trong co so du lieu: " + nhanvien.MatKhau);

    if (!nhanvien) {
      return res.status(404).json({ message: "nhanvien not found" });
    }

    const isPasswordValid = await bcrypt.compare(MatKhau, nhanvien.MatKhau); // Compare the password
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    } else {
      console.log("Login successful");
    }

    // Generate a token or handle session here if needed
    res.status(200).json({ message: "Login successful", nhanvien });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
