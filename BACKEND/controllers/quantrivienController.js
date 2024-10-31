const QuanTriVien = require("../models/QuanTriVien");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  const { MaQuanTriVien, MatKhau } = req.body;

  console.log(req.body);

  try {
    const hashedPassword = await bcrypt.hash(MatKhau, 10);
    const newAdmin = new QuanTriVien({
      MaQuanTriVien,
      MatKhau: hashedPassword,
    });

    await newAdmin.save();
    res.status(201).json({ message: "Đăng ký thành công!" });
  } catch (error) {
    res.status(500).json({ message: "Đăng ký thất bại", error: error.message });
  }
};

exports.login = async (req, res) => {
  const { MaQuanTriVien, MatKhau } = req.body;

  try {
    // Tìm admin theo MaQuanTriVien
    const admin = await QuanTriVien.findOne({ MaQuanTriVien });
    if (!admin) {
      return res
        .status(400)
        .json({ message: "Mã Quản Trị Viên không tồn tại" });
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(MatKhau, admin.MatKhau);
    if (!isMatch) {
      return res.status(400).json({ message: "Mật khẩu không đúng" });
    }
  } catch (error) {
    res.status(500).json({ message: "Có lỗi xảy ra", error });
  }
};
