import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://rawwr:kCIexrkEqPj0UFbf@cluster0.eyknml1.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
};
