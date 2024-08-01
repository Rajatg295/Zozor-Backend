import mongoose from 'mongoose';
import Product from './models/Product.js'; 

const products = [
  {
    name: 'Product 1',
    price: 1000,
    image: '/assets/images/product.jpg',
    rating: 4.5,
    reviewCount: 10,
    description: 'Description of Product 1',
    brand: 'Brand 1',
    originalPrice: 1200,
    discountPercentage: 20,
    quantity: 1,
    category: 'Mobile Tool Kits', 
    stock: 50
  },
  {
    name: 'Product 2',
    price: 1500,
    image: '/assets/images/product.jpg',
    rating: 4.0,
    reviewCount: 8,
    description: 'Description of Product 2',
    brand: 'Brand 2',
    originalPrice: 1800,
    discountPercentage: 15,
    quantity: 1,
    category: 'Mobile Display Screens', 
    stock: 30 
  },
  {
    name: 'Product 3',
    price: 2000,
    image: '/assets/images/product.jpg',
    rating: 4.7,
    reviewCount: 15,
    description: 'Description of Product 3',
    brand: 'Brand 3',
    originalPrice: 2200,
    discountPercentage: 10,
    quantity: 1,
    category: 'Mobile Spare Parts', // Added category
    stock: 20 // Added stock
  },
  {
    name: 'Product 4',
    price: 2500,
    image: '/assets/images/product.jpg',
    rating: 4.3,
    reviewCount: 20,
    description: 'Description of Product 4',
    brand: 'Brand 4',
    originalPrice: 2800,
    discountPercentage: 25,
    quantity: 1,
    category: 'Accessories', // Added category
    stock: 10 // Added stock
  },
  {
    name: 'Product 5',
    price: 3000,
    image: '/assets/images/product.jpg',
    rating: 4.8,
    reviewCount: 30,
    description: 'Description of Product 5',
    brand: 'Brand 5',
    originalPrice: 3500,
    discountPercentage: 30,
    quantity: 1,
    category: 'Accessories', // Added category
    stock: 5 // Added stock
  },
];

const MONGODB_URI = 'mongodb+srv://goel85749:Sidhu295@zozor.suk46dn.mongodb.net/products?retryWrites=true&w=majority&appName=zozor';

const seedDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    await Product.deleteMany({});

    await Product.insertMany(products);
    console.log('Database seeded with sample data');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error.message);
  }
};

seedDB();
