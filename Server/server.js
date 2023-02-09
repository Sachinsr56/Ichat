const express=require('express');
const colors = require("colors");
require('dotenv').config()
const connectDB=require('./Config/db')
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app=express();
connectDB();

app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server has started on PORT ${PORT}`.yellow.bold)
);