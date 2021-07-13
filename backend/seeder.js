import mongoose from "mongoose";
import connectDB from "./config/db.js";
import User from "./models/UserModel.js";
import Product from "./models/ProductModel.js";
import Order from "./models/OrderModel.js";
import products from "./data/products.js";
import users from "./data/users.js";

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = await createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
  }
};

const DestroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  DestroyData();
} else {
  importData();
}
