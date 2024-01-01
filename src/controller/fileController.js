import { port } from "../../config.js";

export let uploadMultipleFile = (req, res, next) => {
  // console.log(req.files);
  let links = req.files.map((value, i) => {
    return `http://localhost:${port}/${value.filename}`;
  });
  res.status(200).json({
    success: true,
    message: "File Uploaded Successfully.",
    Links: links,
  });
};
