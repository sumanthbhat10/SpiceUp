import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Sumanth:Sumanth1999@cluster0.alwpn.mongodb.net/Proshop?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );

    console.log(`Mongoose connected:${conn.connection.host}`);
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
