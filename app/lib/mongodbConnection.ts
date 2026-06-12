import mongoose from "mongoose";
let catched = (global as any).mongoose || { conn: null, promise: null };

let connectDb = async () => {
  console.log("URI:", process.env.MONGODB_URI);
  if (catched.conn) {
    return catched.conn;
  }
  catched.conn = await mongoose.connect(process.env.MONGODB_URI);
  console.log("connected MongoDB");
  return catched.conn;
};
export default connectDb;
