import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://mongoyou:12345@cluster0.ls3rgmx.mongodb.net/stack-overflow-clone"
    );
    console.log("Database connected Successfully!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
