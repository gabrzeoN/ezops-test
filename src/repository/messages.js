import db from "../config/database.js";

async function getAll() {
  const messages = await db.collection("messages").find({}).toArray();
  return messages;
}

async function getByUsername(username) {
  const messages = await db.collection("messages").find({ username }).toArray();
  return messages;
}

async function post(newMessage) {
  const message = await db.collection("messages").insertOne(newMessage);
  return message;
}

const messagesRepository = {
  getAll,
  getByUsername,
  post
};

export default messagesRepository;
