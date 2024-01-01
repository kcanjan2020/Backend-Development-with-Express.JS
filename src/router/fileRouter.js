import { Router } from "express";
import upload from "../middleware/uploadFile.js";
import { uploadMultipleFile } from "../controller/fileController.js";
let fileRouter = Router();
fileRouter.route("/").post(upload.array("document", 5), uploadMultipleFile);
export default fileRouter;
