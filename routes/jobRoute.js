const express = require('express');
const router = express.Router();
const { postJob, getAllJobs } = require("../controllers/jobController");
router.post('/jobs', postJob);
router.get("./jobs", getAllJobs);
module.exports = router;