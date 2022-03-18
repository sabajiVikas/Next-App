import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  // NextJS Way
  if (connection.isConnected) {
    console.log("DB CONNECTED", connection);
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
