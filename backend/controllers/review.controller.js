const Review = require("../models/Review");
const Product = require("../models/Product");
const ApiError = require("../utils/apiError");

const createReview = async (req, res) => {
  const { productId } = req.body;

  const isValidProduct = await Product.findOne({ _id: productId });

  if (!isValidProduct) {
    throw new ApiError(`No product with id : ${productId}`, 400);
  }

  const alreadySubmitted = await Review.findOne({
    product: productId,
    user: req.user.userId,
  });

  if (alreadySubmitted) {
    throw new ApiError("Already submitted review for this product", 400);
  }

  req.body.user = req.user.userId;
  const review = await Review.create(req.body);
  res.status(200).json({
    status: "success",
    response: review,
    message: "Success! Review removed",
  });
};

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({}).populate({
    path: "product",
    select: "name price",
  });
  
  res.status(201).json({
    status: "success",
    response: { reviews, count: reviews.length },
    message: "Success! Review removed",
  });
};
const getSingleReview = async (req, res) => {
  const { id: reviewId } = req.params;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    throw new ApiError(`No review with id ${reviewId}`, 400);
  }

  res.status(201).json({
    status: "success",
    response: review,
    message: "Success! Review removed",
  });
};
const updateReview = async (req, res) => {
  const { id: reviewId } = req.params;
  const { rating, title, comment } = req.body;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    throw new ApiError(`No review with id ${reviewId}`, 400);
  }

  checkPermissions(req.user, review.user);

  review.rating = rating;
  review.title = title;
  review.comment = comment;

  await review.save();
  res.status(200).json({
    status: "success",
    response: review,
    message: "Success! Review removed",
  });
};
const deleteReview = async (req, res) => {
  const { id: reviewId } = req.params;

  const review = await Review.findOne({ _id: reviewId });

  if (!review) {
    throw new ApiError(`No review with id ${reviewId}`, 404);
  }

  checkPermissions(req.user, review.user);
  await review.remove();
  
  res
    .status(200)
    .json({
      status: "success",
      response: '',
      message: "Success! Review removed",
    });
};

const getSingleProductReviews = async (req, res) => {
  const { id: productId } = req.params;
  const reviews = await Review.find({ product: productId });
  res.status(200).json({
    status: "success",
    response: { reviews, count: reviews.length },
    message: "Success! Review removed",
  });
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
  getSingleProductReviews,
};
