const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect("mongodb+srv://crud-interview-api:U2XFFE4mtd5dIKOp@cluster0.agybsms.mongodb.net/crud-api-database");

        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err);
    }
};