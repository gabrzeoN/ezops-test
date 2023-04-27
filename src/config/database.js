import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let db;
export const mongoClient = new MongoClient(process.env.MONGO_URL || "mongodb://localhost:27017");

try {
  await mongoClient.connect()
  db = mongoClient.db(process.env.MONGO_DATABASE);
  console.log("Connected to database!");
} catch (error) {
  console.log("Could't connect to database!", error)
}

export default db;
