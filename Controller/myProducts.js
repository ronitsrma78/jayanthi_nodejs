const productModel = require("../modal/product");

exports.getProducts = async (req, res) => {
  try {
    const products = await productModel.find({}, { _id: 0, __v: 0 });

    if (products.length > 0) {
      res.status(200).json({
        status: "success",

        results: products.length,

        data: {
          products,
        },
      });
    } else {
      res.status(400).json({
        status: "success",

        data: {
          message: "No products available in the repo",
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",

      message: err,
    });
  }
};

exports.newProducts = async (req, res) => {
  try {
    if (validators.ValidateProduct(req.body.productId)) {
      const newProduct = await productModel.create(req.body);

      res.status(201).json({
        status: "success",

        data: {
          newProduct,
        },
      });
    } else {
      res.status(400).json({
        status: "error",

        results: "Enter valid Id",
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",

      message: err.errmsg,
    });
  }
};

exports.updateProducts = async (req, res) => {
  try {
    const products = await productModel.findOneAndUpdate(
      { productId: req.params.id },

      req.body,

      {
        new: true, //to return new doc back

        runValidators: true, //to run the validators which specified in the model
      }
    );

    if (products != null) {
      res.status(200).json({
        status: "success",

        data: {
          notes,
        },
      });
    } else {
      res.status(400).json({
        status: "success",

        data: {
          message: `No product available with ID ${req.params.id} `,
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",

      message: err,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const delProd = await productModel.deleteOne({ productId: req.params.id });

  if (delProd.deletedCount === 0) {
    res.status(404).json({
      status: "fail",

      message: "No product available for this ID",
    });
  } else {
    res.status(200).json({
      status: "success",

      message: `Product with ${req.params.id} ID deleted`,
    });
  }
};

exports.invalid = async (req, res) => {
  res.status(404).json({
    status: "fail",

    message: "Invalid path",
  });
};
