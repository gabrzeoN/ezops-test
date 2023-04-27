
import { io } from "../app.js";
import messagesRepository from "../repositories/messagesRepository.js";

export async function postMessage(newMessage){
  try {
    const message = await messagesRepository.post(newMessage);
    io.emit('message', newMessage);
    console.log("New message posted!");
    return message;
  } catch (error) {
    return error;
  }
}

export async function getAllMessages(){
  try {
    const messages = await messagesRepository.getAll();
    console.log("Sending all messages!");
    return messages;
  } catch (error) {
    return error;
  }
}

export async function getUserMessages(username){
  try {
    const messages = await messagesRepository.getByUsername(username);
    console.log(`Sending all messages from ${username}!`);
    return messages;
  } catch (error) {
    return error;
  }
}
