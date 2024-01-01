import { Router } from "express";
import { Student } from "../model/model.js";
import studentSchema from "../schema/studentSchema.js";
import { createStudent, deleteStudentDetails, readStudent, readStudentDetails, updateStudent } from "../controller/studentController.js";
let  studentRouter=Router();
studentRouter.route("/") //localhost:8000/students

.post(createStudent)
.get(readStudent)

//For update
studentRouter.route("/:studentId") //localhost:8000/students/any
.patch(updateStudent)
.delete(deleteStudentDetails)

//Read Specific
.get(readStudentDetails)
export default studentRouter;