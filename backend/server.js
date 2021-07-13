import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
const app = express();
connectDB();
dotenv.config();

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);

  res.json(product);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
});
