// config/cloudinary.js
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dblyetgck",
  api_key: "768135887263547",
  api_secret: "FZUmX4a0WDH1sT2qixzpfB9dWCA", // Click 'View API Keys' above to copy your API secret
});

module.exports = cloudinary;
