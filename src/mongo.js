// mongoDB.js

import { MongoClient } from "mongodb";

// Connection URI for your MongoDB database
const uri =
  "mongodb+srv://cilbertleon:v7n3zuLlytVRJ3pZ@black.wohx6ci.mongodb.net/tamilcs?retryWrites=true&w=majority&appName=black";

let client;
let db;

// Function to connect to the MongoDB database
export async function connectDB() {
  if (client) {
    console.log("connected to existing client instance");
    db = client.db();
  } else {
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db();
    console.log("connected to new client instance");
  }
}

// Function to insert data into the database
export async function insertData(collectionName, data) {
  const collection = db.collection(collectionName);
  await collection.insertOne(data);
}

// Function to query data from the database
export async function getData(collectionName, query) {
  const collection = db.collection(collectionName);
  return await collection.find(query).toArray();
}

export async function aggregateData(collectionName, pipeline) {
  const collection = db.collection(collectionName);
  return await collection.aggregate(pipeline).toArray();
}
// Add more functions for other CRUD operations as needed

// Function to close the MongoDB connection
export async function closeDB() {
  await client.close();
}
