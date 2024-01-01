import { Router } from "express";
import { createBook, deleteBookDetails, readBook, readBookDetails, updateBook } from "../controller/bookController.js";

export let bookRouter=Router();
bookRouter.route("/")
.post(createBook)
.get(readBook)


bookRouter.route("/:bookId")
.patch(updateBook)
.delete(deleteBookDetails)
.get(readBookDetails)