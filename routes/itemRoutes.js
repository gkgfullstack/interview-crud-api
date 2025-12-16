const router = require("express").Router();
const auth = require("../middleware/auth");
const mongoose = require("mongoose");

const Item = mongoose.model("Item", new mongoose.Schema({
    title: String,
    description: String,
}));

// Create 
router.post("/", auth, async (req, res) => {
    const item = await Item.create(req.body);
    res.json(item);
});

// Read
router.get("/", auth, async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// Update
router.put("/:id", auth, async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.res.json(item));
    res.json(item);
});

// Delete 
router.delete("/:id", auth, async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ msg: "Item deleted" });
});

module.exports = router;