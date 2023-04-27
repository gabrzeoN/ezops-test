import { Router } from "express";

import { io } from "../server.js";
import messagesRepository from "../repository/messages.js";

const router = Router();

router.post("/messages", async (req, res) => {
  try {
    const newMessage = req.body;
    const message = await messagesRepository.post(newMessage);
    io.emit('message', req.body);
    res.send(message).status(201);
  } catch (error) {
    res.sendStatus(500);
    console.log("Error!", error);
  } finally {
    console.log("New message posted!");
  }
})

router.get("/messages", async (req, res) => {
  try {
    const messages = await messagesRepository.getAll();
    res.send(messages).status(200);
  } catch (error) {
    res.sendStatus(500);
    console.log("Error!", error);
  } finally {
    console.log("Sending all messages!");
  }
})

router.get("/messages/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const messages = await messagesRepository.getByUsername(username);
    res.send(messages).status(200);
  } catch (error) {
    res.sendStatus(500);
    console.log("Error!", error);
  } finally {
    console.log(`Sending all messages from the user ${username}!`);
  }
})

export default router;
