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
  const { DienThoai, MatKhau } = req.body;

  try {
    console.log("Login Request:", req.body);

    const docgia = await Docgia.findOne({ DienThoai });

    console.log("Docgia:", docgia);

    // Kiểm tra nếu admin không tồn tại
    if (!docgia) {
      console.log("Admin not found:", DienThoai);
      return res
        .status(400)
        .json({ message: "Mã Quản Trị Viên không tồn tại" });
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(MatKhau, docgia.MatKhau);

    if (!isMatch) {
      return res.status(400).json({ message: "Mật khẩu sai quài dị chời!" });
    }

    // Nếu mật khẩu đúng, trả về phản hồi thành công với dữ liệu người dùng
    res.status(200).json({
      message: "Đăng nhập thành công",
      MaDocGia: docgia.MaDocGia,
      TenDocGia: docgia.TenDocGia,
      DienThoai: docgia.DienThoai,
      // Include any other relevant user data here
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Có lỗi xảy ra", error });
  }
};

// Method to get a Docgia by MaDocGia
exports.getDocgiaByMaDocGia = async (req, res) => {
  try {
    const maDocGia = req.params.maDocGia;
    const docgia = await Docgia.findOne({ MaDocGia: maDocGia });
    if (!docgia) {
      return res.status(404).json({ message: "Docgia not found" });
    }
    res.json(docgia);
  } catch (error) {
    res.status(500).json({ message: "Error fetching Docgia data", error });
  }
};
