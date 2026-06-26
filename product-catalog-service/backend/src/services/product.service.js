const Product = require("../models/product.model");
const { decodeCursor, encodeCursor } = require("../utils/cursor");


const getProducts = async ({
  limit = 20,
  category,
  cursor,
}) => {


  limit = Number(limit);

  if (isNaN(limit) || limit <= 0) {
    limit = 20;
  }

  if (limit > 100) {
    limit = 100;
  }

  const filter = {};

  if (category) {
    filter.category = category;
  }


  if (cursor) {

    const decoded = decodeCursor(cursor);

    filter.$or = [
      {
        updatedAt: {
          $lt: decoded.updatedAt,
        },
      },
      {
        updatedAt: decoded.updatedAt,
        _id: {
          $lt: decoded._id,
        },
      },
    ];
  }



  const products = await Product.find(filter)
    .sort({
      updatedAt: -1,
      _id: -1,
    })
    .limit(limit + 1)
    .lean();


  const hasMore = products.length > limit;

  if (hasMore) {
    products.pop();
  }


  let nextCursor = null;

  if (hasMore && products.length) {
    nextCursor = encodeCursor(
      products[products.length - 1]
    );
  }

  return {

    products,

    nextCursor,

    hasMore,

    count: products.length,

  };
};

module.exports = {
  getProducts,
};