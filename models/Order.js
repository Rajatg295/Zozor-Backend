import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  products: [
    {
      _id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String },
      rating: { type: Number },
      reviewCount: { type: Number },
      description: { type: String },
      brand: { type: String },
      originalPrice: { type: Number },
      discountPercentage: { type: Number },
      quantity: { type: Number, required: true },
      category: { type: String },
      stock: { type: Number },
    }
  ],
  addresses: [
    {
      _id: { type: String },
      name: { type: String, required: true },
      room: { type: String },
      address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String },
      country: { type: String, required: true },
      pin: { type: String, required: true },
      phone: { type: String, required: true }
    }
  ],
  discount: { type: Number },
  total: { type: Number, required: true },
  coupon: { type: String },
  paymentMethod: { type: String, required: true },
  images: [String], // Array of image file paths
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
