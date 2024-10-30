// routes/sach.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');
const sachController = require('../controllers/sachController');

//
console.log("running sach.js"); // Debugging 

// Cấu hình bộ nhớ với Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'sach_images', // Thư mục lưu trữ trong Cloudinary
    format: async () => 'png', // Định dạng ảnh
    public_id: (req, file) => file.filename,
  },
});

const upload = multer({ storage: storage });

// Route thêm sách với hình ảnh
router.post('/', upload.single('HinhAnh'), sachController.createSach);

// Các route khác
router.get('/', sachController.getSach);
router.put('/:id', sachController.updateSach);
router.delete('/:id', sachController.deleteSach);

module.exports = router;