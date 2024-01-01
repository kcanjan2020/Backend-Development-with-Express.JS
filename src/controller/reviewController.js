import { Review } from "../model/model.js";

export let createReview = async (req, res) => {
  let data = req.body;
  //console.log(data)
  try {
    //Save data to review
    let result = await Review.create(data);
    res.json({
      success: true,
      message: "Review created Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readReview = async (req, res) => {
  let query = req.query;
  //   console.log(query);
  //   console.log(req.query.name);
  try {
    // let result = await Review.find({});
    // let result = await Review.find({ rating: query.rating });
    // let result=await Review.find({}).populate("productId")
    // let result = await Review.find({}).populate("productId", "name price");
    // let result = await Review.find({}).populate("productId", " -_id -quantity"); //hide product id and quantity
    let result = await Review.find({})
      .populate("productId", "name price")
      .populate("userId", "name email");
    res.json({
      success: true,
      message: "Review Read Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let updateReview = async (req, res) => {
  //console.log(req.params)
  let review = req.params.review;
  //console.log(review)
  let data = req.body;
  //console.log(data)

  try {
    let result = await Review.findByIdAndUpdate(review, data);
    res.json({
      success: true,
      message: "Review updated successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let deleteReviewDetails = async (req, res) => {
  let review = req.params.review;
  try {
    let result = await Review.findByIdAndDelete(review);
    res.json({
      success: true,
      message: "Review Deleted successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export let readReviewDetails = async (req, res) => {
  let review = req.params.review;
  try {
    let result = await Review.findById(review);
    res.json({
      success: true,
      message: "Review Read Successfully",
      result: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
