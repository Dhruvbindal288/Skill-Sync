const mongoose = require('mongoose');

const connectDb=async () => {
    try {
        await mongoose.connect(process.env.CONNECT_TO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;