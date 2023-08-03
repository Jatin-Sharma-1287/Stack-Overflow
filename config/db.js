import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://2020csb1069:12345@cluster0.n2hb0ey.mongodb.net/stack-overflow-clone"
    );
    console.log("Database connected Successfully!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
