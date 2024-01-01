import { Router } from "express";
import { createReview, deleteReviewDetails, readReview, readReviewDetails, updateReview } from "../controller/reviewController.js";

let  reviewRouter=Router();
reviewRouter.route("/") //localhost:8000/review

.post(createReview)
.get(readReview)

//For update
reviewRouter.route("/:reviewId") //localhost:8000/review/any
.patch(updateReview)
.delete(deleteReviewDetails)

//Read Specific
.get(readReviewDetails)
export default reviewRouter;