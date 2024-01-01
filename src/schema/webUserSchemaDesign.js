import { Schema } from "mongoose";

let webUserSchema = Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  age: {
    type: Number,
    required: [true, "Age field is required"],
  },
  email: {
    type: String,
    required: [true, "email field is required"],
  },
  password: {
    type: String,
    required: [true, "password field is required"],
  },
  phoneNumber: {
    type: Number,
    required: [true, "phoneNumber field is required"],
  },
  isMarried: {
    type: Boolean,
    required: [true, "isMarried field is required"],
  },
  spouseName: {
    type: String,
    required: [true, "spouseName field is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender field is required"],
  },
  dob: {
    type: Date,
    required: [true, "dob field is required"],
  },
  location: {
    country: {
      type: String,
    },
    exactLocation: {
      type: String,
    },
  },
  favTeacher: [
    {
      type: String,
      required: [true, "favTeacher field is required"],
    },
  ],
  favSubject: [
    {
      bookName: {
        type: String,
      },
      bookAuthor: {
        type: String,
      },
    },
  ],
});

export default webUserSchema;
