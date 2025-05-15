import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import storeRoutes from "./routes/store.js";
import ratingRoutes from "./routes/rating.js";
import adminRoutes from "./routes/admin.js";
import logger from "./utils/log.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/store", storeRoutes);
app.use("/api/v1/rating", ratingRoutes);
app.use("/api/v1/admin", adminRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
