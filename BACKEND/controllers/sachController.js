const Sach = require("../models/Sach");

exports.createSach = async (req, res) => {
  try {
    const {MaSach, TenSach, DonGia, SoQuyen, NamXuatBan, MaNXB, NguonGoc, TheLoai } =
      req.body;

      console.log(req.body);

    const HinhAnh = req.file.path; // URL hình ảnh lưu trong Cloudinary

    console.log(HinhAnh);

    const newSach = new Sach({
      MaSach,
      TenSach,
      DonGia,
      SoQuyen,
      NamXuatBan,
      MaNXB,
      NguonGoc,
      TheLoai,
      HinhAnh,
    });
    await newSach.save();
    res
      .status(201)
      .json({ message: "Book and image saved successfully", sach: newSach });
  } catch (error) {
    res.status(500).json({ message: "Error saving book and image", error });
  }
};

exports.getSach = async (req, res) => {
  try {
    const sach = await Sach.find();
    res.status(200).json(sach);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};

exports.updateSach = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSach = await Sach.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Book updated successfully", sach: updatedSach });
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
};

exports.deleteSach = async (req, res) => {
  try {
    const { id } = req.params;
    await Sach.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
};
