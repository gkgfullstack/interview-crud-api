const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

app.use(cors());
app.use(express.json());
db();

app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

app.listen(5001, () => console.log("Server running on 5001"));
