const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Home route
app.get("/", (req, res) => {
    res.send("MongoDB with Mongoose is Working!");
});

// Default route
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});