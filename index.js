import cors from "cors";
import express, { json } from "express";
import { port } from "./config.js";
import connectToMongoDb from "./src/databaseConnection/mongoDbConnection.js";
import { bookRouter } from "./src/router/bookRouter.js";
import classRoomRouter from "./src/router/classRoomRouter.js";
import productRouter from "./src/router/productRouter.js";
import reviewRouter from "./src/router/reviewRouter.js";
import studentRouter from "./src/router/studentRouter.js";
import teacherRouter from "./src/router/teacherRouter.js";
import traineeRouter from "./src/router/traineeRouter.js";
import webUserRouter from "./src/router/webUserRouter.js";
import fileRouter from "./src/router/fileRouter.js";
let expressApp = express();
expressApp.use(json());
expressApp.use(cors());
expressApp.use(express.static("./public"));
expressApp.listen(port, () => {
  console.log(`Express app is listening at port ${port}`);
});

connectToMongoDb();

expressApp.use("/students", studentRouter);
expressApp.use("/teachers", teacherRouter);
expressApp.use("/books", bookRouter);
expressApp.use("/trainees", traineeRouter);
expressApp.use("/webUsers", webUserRouter);
expressApp.use("/products", productRouter);
expressApp.use("/reviews", reviewRouter);
expressApp.use("/classrooms", classRoomRouter);
expressApp.use("/files",fileRouter)

//=> How to generate Image link
/* let files = [
  {
    destination: "./public",
    filename: "abc.jpg",
  },
  {
    destination: "./public",
    filename: "anjan.jpg",
  },
  {
    destination: "./public",
    filename: "ram.jpg",
  },
  {
    destination: "./public",
    filename: "hari.jpg",
  },
];
let output = files.map((value, i) => {
  return `http:localhost:8000/${value.filename}`;
});
console.log(output);
 */
