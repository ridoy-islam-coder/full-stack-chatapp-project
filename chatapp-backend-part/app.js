import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from "helmet";
import http from "http";

import mongoose from "mongoose";
import { DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE, WEB_CACHE } from "./app/config/config.js";
import router from "./routes/api.js";
import { initSocket } from "./socket.js"; // ✅ socket import

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());

// Rate limiter
const limiter = rateLimit({
  windowMs: REQUEST_TIME,
  max: REQUEST_NUMBER
});
app.use(limiter);

// Cache
app.set('etag', WEB_CACHE);

// Database connect
mongoose.connect(DATABASE, { autoIndex: true })
  .then(() => console.log("MongoDB connected"))
  .catch(() => console.log("MongoDB disconnected"));

// Routes
app.use("/api", router);

// 🔹 HTTP server create
const server = http.createServer(app);

// 🔹 Socket initialize (logic socket.js এ)
initSocket(server);

// ❗ app.listen নয়
server.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});