const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIP_SEC_KEY);
const Product = require("../models/product.model");

exports.getCheckOutSession = asyncHandler(async (req, res, next) => {
  // const product = await Product.findById(req.params.id);
  const { user, products } = req.body;
  const lineItems = await Promise.all(
    products.map(async (item) => {
      console.log(item)
      const product = Product.findById(item._id);
      return {
        price_data: {
          currency: "egp",
          product_data: {
            name: product.name,
            description: product.description,
            images: [
              `https://localhost:3500/imgs/products/${product.imageCover}`,
            ],
          },
          unit_amount: product.price *100,
        },
        quantity: item.quantity,
      };
    })
  );
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    // line_items: [
    //   {
    //     price_data: {
    //       currency: "egp",
    //       product_data: {
    //         name: product.name,
    //         description: product.description,
    //         images: [
    //           `https://localhost:3500/imgs/products/${product.imageCover}`,
    //         ],
    //       },
    //       unit_amount: product.price,
    //     },
    //     quantity: 1,
    //   },
    // ],
    line_items: lineItems,
    mode: "payment",
    success_url: `${req.protocol}://${req.get("host")}/`,
    cancel_url: `${req.protocol}://${req.get("host")}/products/${
      req.params.id
    }`,
  });
  res.status(200).json({
    status: "success",
    response: session,
    massage: "Session is created",
  });
});

