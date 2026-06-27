const mongoose = require('mongoose');
const dburl = process.env.MONGO_URL;
console.log("dburl=====================================", dburl)
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(dburl, {
            serverSelectionTimeoutMS: 30000
        })
        console.log(`MongoDB connected : ${connection.connection.host}`)
    } catch (error) {
        console.error(`Error connection to MongoDB: ${error.message}`);
        process.exit(1)
    }
}
module.exports = connectDB