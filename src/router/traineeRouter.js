import { Router } from "express";
import { createTrainee, deleteTraineeDetails, readTrainee, readTraineeDetails, updateTrainee } from "../controller/traineeController.js";

let  traineeRouter=Router();
traineeRouter.route("/") //localhost:8000/trainees

.post(createTrainee)
.get(readTrainee)

//For update
traineeRouter.route("/:traineeId") //localhost:8000/trainees/any
.patch(updateTrainee)
.delete(deleteTraineeDetails)

//Read Specific
.get(readTraineeDetails)
export default traineeRouter;