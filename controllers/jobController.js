const Jobs = require('../models/Jobs');
exports.postJob = async (req, res) => {
    try {
        const job = await Jobs.create(req.body);
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.getAllJobs = async (req, res) => {
    const jobs = await Jobs.find();
    res.json(jobs)
}