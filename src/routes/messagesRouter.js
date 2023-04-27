import { Router } from "express";

import messagesController from "../controllers/messagesController.js";

const messagesRouter = Router();

messagesRouter.post("/messages", messagesController.postMessage);
messagesRouter.get("/messages", messagesController.getAllMessages);
messagesRouter.get("/messages/:username", messagesController.getUserMessages);

export default messagesRouter;
