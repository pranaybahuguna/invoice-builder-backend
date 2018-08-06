import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Client = new Schema({
  fisrstName: {
    type: String,
    required: true
  },
  lastName: {
    type: Number,
    required: true
  },
  email: {
    type: Date,
    required: true
  }
});
export default mongoose.model("Client", Client);
