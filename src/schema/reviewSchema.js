import { Schema } from "mongoose";

let reviewSchema = Schema({
  productId: {
    // type:String
    type: Schema.ObjectId,
    ref: "Product",
    required: [true, "productId field is required"],
  },
  userId: {
    type: Schema.ObjectId,
    ref: "Webuser",
    required: [true, "userId field is required"],
  },
  rating: {
    type: Number,
    required: [true, "Rating field is required"],
  },
  description: {
    type: String,
    required: [true, "Description field is required"],
  },
});

export default reviewSchema;
