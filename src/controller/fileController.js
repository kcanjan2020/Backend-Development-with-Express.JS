import { port } from "../../config.js";

export let uploadMultipleFile = (req, res, nex) => {
  console.log(req.files);
  let links = req.files.map((value, i) => {
    return `http://localhost:${port}/${value.filename}`;
  });
  res.status(200).json({
    success: true,
    message: "File uploaded successfully.",
    links: links,
  });
};
