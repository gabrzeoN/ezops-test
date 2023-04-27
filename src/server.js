import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import router from "./routes/index.js";

const app = express();
app
.use(cors())
.use(express.json())
.use(router);

const httpServer = createServer(app);
export const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Socket connected!");
});

dotenv.config();
const port = (+process.env.PORT || 3000);
httpServer.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
