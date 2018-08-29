import mongoose from "mongoose";

const Schema = mongoose.Schema;
const User = new Schema({
  local: {
    email: String,
    name: String,
    password: String
  },
  google: {
    email: String,
    id: String,
    displayName: String,
    token: String
  },
  github: {
    email: String,
    id: String,
    displayName: String,
    token: String
  }
});
export default mongoose.model("User", User);
