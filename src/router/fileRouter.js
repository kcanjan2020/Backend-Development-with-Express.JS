import { Router } from "express";
import { uploadMultipleFile } from "../controller/fileController.js";
import upload from "../middleware/uploadFile.js";

let fileRouter = Router();
fileRouter.route("/").post(upload.array("document", 5), uploadMultipleFile);
export default fileRouter;
