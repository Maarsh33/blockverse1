// import { MongoClient, Db } from "mongodb";

// //require("dotenv").config();

// const uri =
//   "mongodb+srv://myrasheikh33:YpERk4KmJDvKDXyW@cluster0.5ixyfly.mongodb.net/";

// if (!uri) {
//   throw new Error("MONGODB_URI environment variable is not defined");
// }

// const client = new MongoClient(uri);

// let db: Db;

// export async function connectToDatabase() {
//   if (!db) {
//     await client.connect();
//     db = client.db("PublicKey");
//   }
//   return db;
// }
