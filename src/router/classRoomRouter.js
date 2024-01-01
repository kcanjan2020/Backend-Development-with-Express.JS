import { Router } from "express";
import {
  createClassRoom,
  deleteClassRoomDetails,
  readClassRoom,
  readClassRoomDetails,
  updateClassRoom,
} from "../controller/classRoomController.js";

let classRoomRouter = Router();
classRoomRouter.route("/").post(createClassRoom).get(readClassRoom);

classRoomRouter
  .route("/:classId")
  .patch(updateClassRoom)
  .get(readClassRoomDetails)
  .delete(deleteClassRoomDetails);

export default classRoomRouter;
