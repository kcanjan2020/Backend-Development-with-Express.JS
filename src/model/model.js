import { model } from "mongoose";
import studentSchema from "../schema/studentSchema.js";
import teacherSchema from "../schema/teacherSchema.js";
import bookSchema from "../schema/bookSchema.js";
import traineeSchema from "../schema/traineeSchema.js";
import productSchema from "../schema/productSchema.js";
import reviewSchema from "../schema/reviewSchema.js";
import webUserSchema from "../schema/webUserSchemaDesign.js";
import classRoomSchema from "../schema/classRoomSchema.js";

// Defining array is called model
export let Student = model("Student", studentSchema);
//model name must be singular and firstLetter capital
//match

//Teacher model : Use teacherSchema as as object
export let Teacher = model("Teacher", teacherSchema);

export let Book = model("Book", bookSchema);

export let Trainee = model("Trainee", traineeSchema);
export let Webuser = model("Webuser", webUserSchema);
export let Product = model("Product", productSchema);
export let Review = model("Review", reviewSchema);
export let Classroom = model("Classroom", classRoomSchema);
