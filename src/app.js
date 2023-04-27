import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import messagesRouter from "./routes/messagesRouter.js";

const app = express();
app
.use(cors())
.use(express.json())
.use(messagesRouter);

export const httpServer = createServer(app);
export const io = new Server(httpServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("Socket connected!");
});
