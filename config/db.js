import mongoose from 'mongoose';

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error("MONGODB_URI is not defined in environment variables");
        process.exit(1);
    }
    await mongoose.connect(uri)
        .then(() => {
            console.log("Connected to MongoDB");
        });
}