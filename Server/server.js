const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./Config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const { protect } = require("./middleware/authMiddleware");

const app = express();
connectDB();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/chats",protect, chatRoutes);
app.use("/message",protect, messageRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server has started on PORT ${PORT}`.yellow.bold)
);
