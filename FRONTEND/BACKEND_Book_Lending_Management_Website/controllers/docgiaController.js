const Docgia = require("../models/Docgia");
const bcrypt = require("bcrypt");

// Create a new Docgia
exports.createDocgia = async (req, res) => {
  console.log(req.body); // Check if the request body is received

  try {
    const newDocgia = new Docgia(req.body);
    await newDocgia.save();
    res.status(201).json(newDocgia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all Docgia
exports.getDocgia = async (req, res) => {
  try {
    const docgiaList = await Docgia.find();
    res.status(200).json(docgiaList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Docgia by ID
exports.updateDocgia = async (req, res) => {
  try {
    const updatedDocgia = await Docgia.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDocgia) {
      return res.status(404).json({ message: "Docgia not found" });
    }
    res.status(200).json(updatedDocgia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Docgia by ID
exports.deleteDocgia = async (req, res) => {
  try {
    const deletedDocgia = await Docgia.findByIdAndDelete(req.params.id);
    console.log("deletedDocgia");
    console.log(req.params.id);
    if (!deletedDocgia) {
      return res.status(404).json({ message: "Docgia not found" });
    }
    res.status(200).json({ message: "Docgia deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login a Docgia
exports.loginDocgia = async (req, res) => {
  try {
    const { DienThoai, MatKhau } = req.body;
    const docgia = await Docgia.findOne({ DienThoai });

    const hashedPassword = await bcrypt.hash(MatKhau, 10);
    console.log("Pw người dun nhap de dang nhap: " + hashedPassword);
    console.log("Pw trong co so du lieu: " + docgia.MatKhau);

    if (!docgia) {
      return res.status(404).json({ message: "Docgia not found" });
    }

    const isPasswordValid = await bcrypt.compare(MatKhau, docgia.MatKhau); // Compare the password
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    } else {
      console.log("Login successful");
    }

    // Generate a token or handle session here if needed
    res.status(200).json({ message: "Login successful", docgia });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
