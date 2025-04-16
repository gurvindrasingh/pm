// index.ts
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/authRoutes";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";

const app = express();
dotenv.config();
const prisma = new PrismaClient();

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI!).then(() => {
  console.log("MongoDB connected");
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});

// Export prisma for use in controllers
export { prisma };
