import mongoose, { connect } from "mongoose";

const MONGO_URL="mongodb+srv://admin:admin@cluster0.tehhfti.mongodb.net/"
const  dbconnection=async()=>{
    try{
      const connectionInstance= await mongoose.connect(MONGO_URL);
        console.log(connectionInstance.connection.host)
    }catch(err){
        console.log(err);
        throw err;
    }
}
export default dbconnection;