// import express from 'express';
// import multer from 'multer';
// import Order from '../models/Order.js';
// import path from 'path';  // Ensure you import path for file handling

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Directory to save uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// router.post('/orders', upload.array('images[]'), async (req, res) => {
//   try {
//     console.log('Request Body:', req.body);
//     console.log('Files:', req.files);
//     const { products, addresses, discount, total, coupon, paymentMethod } = req.body;

//     if (!products || !addresses) {
//       throw new Error('Products or addresses data is missing');
//     }
      
//     const productsArray = JSON.parse(products); 
//     const addressesArray = JSON.parse(addresses);

//     const order = new Order({
//       products: productsArray,
//       addresses: addressesArray,
//       discount: Number(discount),
//       total: Number(total),
//       coupon,
//       paymentMethod,
//       images: req.files.map(file => file.path)
//     });

//     await order.save();

//     res.status(200).json({ message: 'Order placed successfully!' });
//   } catch (error) {
//     console.error('Error processing order:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// export default router;





import express from 'express';
import multer from 'multer';
import Order from '../models/Order.js';
import path from 'path';  // Ensure you import path for file handling

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post('/orders', upload.array('images[]'), async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    console.log('Files:', req.files);
    const { products, addresses, discount, total, coupon, paymentMethod } = req.body;

    console.log('Received products:', products);
    console.log('Received addresses:', addresses);

    if (!products || !addresses) {
      throw new Error('Products or addresses data is missing');
    }

    const productsArray = JSON.parse(products); 
    const addressesArray = JSON.parse(addresses);

    const order = new Order({
      products: productsArray,
      addresses: addressesArray,
      discount: Number(discount),
      total: Number(total),
      coupon,
      paymentMethod,
      images: req.files.map(file => file.path)
    });

    await order.save();

    res.status(200).json({ message: 'Order placed successfully!' });
  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
