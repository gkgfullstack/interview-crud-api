const express = require("express");
const router = express.Router();
const { getUsers, createUser, postusers } = require("../controllers/user.controller");

router.get('/users', getUsers);
router.post('/users', postusers)

router.get("/", getUsers);
router.post("/", createUser);

module.exports = router;