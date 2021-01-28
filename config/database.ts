import Mongoose from "mongoose";

let database: Mongoose.Connection;

const connect = (): any => {
  const MongoDB = process.env.MONGODB_CONNECTION;

  if (database) return;

  Mongoose.connect(MongoDB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });

  return database;
};

const disconnect = () => {
  if (!database) return;

  Mongoose.disconnect();
};

export default { connect, disconnect };