const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const docgiaRoutes = require("./routes/docgia");
const sachRoutes = require("./routes/sach");
const nhaxuatbanRoutes = require("./routes/nhaxuatban");
const theodoimuonsachRoutes = require("./routes/theodoimuonsach");
const nhanvienRoutes = require("./routes/nhanvien");

app.use("/api/docgia", docgiaRoutes);
app.use("/api/sach", sachRoutes);
app.use("/api/nhaxuatban", nhaxuatbanRoutes);
app.use("/api/theodoimuonsach", theodoimuonsachRoutes);
app.use("/api/nhanvien", nhanvienRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
