require("dotenv").config(); // 👈 ALWAYS FIRST

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// 🔍 Debug check (temporary)
console.log("Mongo URL =>", process.env.MONGODB_URL);

const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl)
  .then(() => console.log("Mongodb connected..."))
  .catch(err => console.error("MongoDB error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"))
  );
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
