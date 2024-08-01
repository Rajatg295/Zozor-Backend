import Review from '../models/Review.js';

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId });
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length || 0;
    res.status(200).json({ reviews, averageRating });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addReview = async (req, res) => {
  const { name, rating, comment } = req.body;
  const { productId } = req.params;

  try {
    const newReview = new Review({ name, rating, comment, productId });
    await newReview.save();
    const reviews = await Review.find({ productId });
    const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    res.status(201).json({ newReview, averageRating });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
