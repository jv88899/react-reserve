import mongoose from "mongoose";
const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    console.log("Using existing connection");
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParster: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected");
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
