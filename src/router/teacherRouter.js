import { Router } from "express";
import { Teacher } from "../model/model.js";
import teacherSchema from "../schema/teacherSchema.js";
import { createTeacher, deleteTeacherDetails, readTeacher, readTeacherDetails, updateTeacher } from "../controller/teacherController.js";
let  teacherRouter=Router();
teacherRouter.route("/") //localhost:8000/teachers

.post(createTeacher)
.get(readTeacher)

//For update
teacherRouter.route("/:teacherId") //localhost:8000/teachers/any
.patch(updateTeacher)
.delete(deleteTeacherDetails)

//Read Specific
.get(readTeacherDetails)
export default teacherRouter;