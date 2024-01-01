import { Router } from "express";
import {
  createWebuser,
  deleteWebuserDetails,
  loginWebuser,
  readWebuser,
  readWebuserDetails,
  updateWebuser,
} from "../controller/webUserController.js";

let webUserRouter = Router();
webUserRouter
  .route("/") //localhost:8000/webUsers
  .post(createWebuser)
  .get(readWebuser);

webUserRouter.route("/login").post(loginWebuser);
//for update => Dynamic router is always place at last
webUserRouter
  .route("/:webuserId") //localhost:8000/webUsers/any
  .patch(updateWebuser)
  //Read Specific data
  .get(readWebuserDetails)
  //Delete specific data
  .delete(deleteWebuserDetails);

export default webUserRouter;
