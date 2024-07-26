import mongoose from "mongoose";

const Specification = new mongoose.Schema({
  feature: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const Review = new mongoose.Schema({
  user_id: {
    type: String,
  },
  rating: {
    type: Number,
    required: false,
  },
  title:{
    type:String,
    required:true,
  },
  review: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Products = new mongoose.Schema({
  vendor_id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sub_category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  stock_count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: false,
  },
  specifications: {
    type: [Specification],
    required: false,
  },
  video_link: {
    type: String,
    required: false,
  },
  reviews: {
    type: [Review],
    required: false,
  },
  benefits: {
    type: [String],
    required: false,
  },
  warranty: {
    type: String,
    required: false,
  },
  brand: {
    type: String,
    required: true,
  },
  admin_approval: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default mongoose.model("Products", Products, "products");
