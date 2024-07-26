import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  rating: Number,
  reviewCount: Number,
  description: String,
  brand: String,
  originalPrice: Number,
  discountPercentage: Number,
  quantity: Number,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
