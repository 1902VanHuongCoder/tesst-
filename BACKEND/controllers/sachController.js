const Sach = require("../models/Sach");
const cloudinary = require('../config/cloudinary');

exports.createSach = async (req, res) => {
  try {
    const {
      MaSach,
      TenSach,
      DonGia,
      SoQuyen,
      NamXuatBan,
      MaNXB,
      NguonGoc,
      TheLoai,
    } = req.body;

    console.log(req.body);

    const HinhAnh = req.file.path; // URL hình ảnh lưu trong Cloudinary
    const cloudinary_id = req.file.filename; // Assuming the Cloudinary ID is stored in the filename property

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
      cloudinary_id, // Add the Cloudinary ID here
    });
    await newSach.save();
    res
      .status(201)
      .json({ message: "Book and image saved successfully", sach: newSach });
  } catch (error) {
    res.status(500).json({ message: "Error saving book and image", error });
  }
};

exports.uploadImage = async (req, res) => {
  try {
    res.json({ url: req.file.path, cloudinary_id: req.file.filename });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    await cloudinary.uploader.destroy(req.body.public_id);
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSach = async (req, res) => {
  const {
    MaSach,
    TenSach,
    DonGia,
    SoQuyen,
    NamXuatBan,
    MaNXB,
    NguonGoc,
    TheLoai,
  } = req.body;

  try {
    const sach = await Sach.findById(req.params.id);
    console.log(sach);
    if (!sach) {
      // console.log(sach); 
      return res.status(404).json({ message: "Sách not found" });
    }

    // Update image if a new one is uploaded
    if (req.file) {
      // Remove old image from cloud storage

      // Remove old image from cloud storage
      if (sach.cloudinary_id) {
        try {
          await cloudinary.uploader.destroy(sach.cloudinary_id);
          console.log("Old image removed from Cloudinary");
        } catch (error) {
          console.error("Error removing old image from Cloudinary:", error);
          return res
            .status(500)
            .json({
              message: "Error removing old image from Cloudinary",
              error,
            });
        }
      }

      // Update with new image
      sach.HinhAnh = req.file.path;
      sach.cloudinary_id = req.file.filename;
    }

    // Update other fields
    Object.assign(sach, {
      MaSach,
      TenSach,
      DonGia,
      SoQuyen,
      NamXuatBan,
      MaNXB,
      NguonGoc,
      TheLoai,
      HinhAnh: sach.HinhAnh, // Ensure HinhAnh is included
    });

    const updatedSach = await sach.save();
    res.json(updatedSach);

    console.log("Runnnn");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSach = async (req, res) => {
  try {
    const sach = await Sach.findById(req.params.id);
    if (!sach) {
      return res.status(404).json({ message: "Sách not found" });
    }

    // Remove image from cloud storage
    await cloudinary.uploader.destroy(sach.cloudinary_id);

    await sach.remove();
    res.json({ message: "Sách deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
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
