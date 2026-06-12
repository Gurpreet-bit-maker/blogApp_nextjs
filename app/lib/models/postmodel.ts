import mongoose from "mongoose";
// delete mongoose.models.BlogModel;
let userSchema = new mongoose.Schema({ title: String });

let BlogModel =
  mongoose.models.BlogModel || mongoose.model("BlogModel", userSchema);

export default BlogModel;
