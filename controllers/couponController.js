import coupons from "../models/coupons.js";

export const addCoupon = async (req, res) => {
  try {
    const { name, code, discount, discount_text, startDate, expiryDate } =
      req.body;
    const coupon = new coupons({
      name,
      code,
      discount,
      discount_text,
      startDate,
      expiryDate,
    });
    await coupon.save();
    res.status(201).json({
      message: "Coupon added successfully",
      data: coupon,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllCoupons = async (req, res) => {
  try {
    const couponsData = await coupons.find({});
    res.status(200).json({ data: couponsData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
