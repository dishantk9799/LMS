import dotenv from "dotenv";
import express from "express"; // Import Express
import connectDB from "./database/db.js";

dotenv.config({
  path: "./.env",
});

const app = express(); // Initialize Express app

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      const port = process.env.PORT || 8000;
      const localHostLink = `http://localhost:${port}`;
      console.log(`⚙️ Server is running at port: ${port}`);
      console.log(`🌐 Local host link: ${localHostLink}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!! ", err);
  });
