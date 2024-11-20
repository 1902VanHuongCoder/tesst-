const bcrypt = require("bcrypt");
const QuanTriVien = require("../models/QuanTriVien"); // Adjust the path as necessary

exports.signup = async (req, res) => {
  const { MaQuanTriVien, MatKhau } = req.body;

  try {
    const newAdmin = new QuanTriVien({
      MaQuanTriVien,
      MatKhau,
      ChucVu: "admin",
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
    console.log("Login Request:", req.body);

    // Tìm admin theo MaQuanTriVien
    const admin = await QuanTriVien.findOne({ MaQuanTriVien });

    // Kiểm tra nếu admin không tồn tại
    if (!admin) {
      console.log("Admin not found:", MaQuanTriVien);
      return res
        .status(400)
        .json({ message: "Mã Quản Trị Viên không tồn tại" });
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(MatKhau, admin.MatKhau);
   
    if (!isMatch) {
      return res.status(400).json({ message: "Mật khẩu sai quài dị chời!" });
    }

    // Nếu mật khẩu đúng, trả về phản hồi thành công
    res.status(200).json({ message: "Đăng nhập thành công" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Có lỗi xảy ra", error });
  }
};
