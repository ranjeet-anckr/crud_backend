import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoUrl = process.env.MONGO_URL;
const dbconnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(mongoUrl);
    console.log(connectionInstance.connection.host);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export default dbconnection;
