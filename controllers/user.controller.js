const pool = require("../config/db");
const User = require("../models/user.model");
exports.postusers = async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.send("user is save in DB successfully");
}

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}
// GET all users
exports.getUsers = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// CREATE user
exports.createUser = async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
            [name, email, age]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};