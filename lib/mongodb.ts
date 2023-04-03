import mongoose from "mongoose";

interface Connection {
  isConnected?: boolean;
}

const connection: Connection = {};

export async function connectToDatabase(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI as string);

  connection.isConnected = Boolean(db.connections[0].readyState);
}
