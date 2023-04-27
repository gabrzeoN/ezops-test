
import * as messagesService from "../services/messagesService.js";

async function postMessage(req, res){
  try {
    const newMessage = req.body;
    const message = await messagesService.postMessage(newMessage);
    res.status(201).send(message);
  } catch (error) {
    res.sendStatus(500);
    console.log("Error!", error);
  }
}

async function getAllMessages(req, res){
  try {
    const messages = await messagesService.getAllMessages();
    res.status(200).send(messages);
  } catch (error) {
    console.log("Error!", error);
    res.sendStatus(500);
  }
}

async function getUserMessages(req, res){
  try {
    const { username } = req.params;
    const messages = await messagesService.getUserMessages(username);
    res.status(200).send(messages);
  } catch (error) {
    console.log("Error!", error);
    res.sendStatus(500);
  }
}

const messagesController = {
  getAllMessages,
  getUserMessages,
  postMessage
};

export default messagesController;
