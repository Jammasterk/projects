const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: "frontend-720",
  api_key: 912999852761837,
  api_secret: "C-HUAnl9MUAys8qBbWHTdo_YDrw",
});

module.exports = cloudinary