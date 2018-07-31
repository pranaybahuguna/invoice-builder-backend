import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const Schema = mongoose.Schema;
const Invoice = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  },
  date: {
    type: Date
  },
  due: {
    type: Date
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  }
});
Invoice.plugin(mongoosePaginate);
export default mongoose.model("Invoice", Invoice);
