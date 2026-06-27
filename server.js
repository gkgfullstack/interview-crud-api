require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv")
const app = express();
const connectDB = require("./databaseConnection");
const routes = require("./routes/index")

connectDB();
dotenv.config();
app.use(express.json());

app.use("/api", routes);
app.get("/api/pin", (req, res) => {
    res.send("pong");
})
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});