const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/apiResponse");
const productService = require("../services/product.service");

/**
 * GET /api/products
 */
const getProducts = asyncHandler(async (req, res) => {
  const { limit, category, cursor } = req.query;

  const result = await productService.getProducts({
    limit,
    category,
    cursor,
  });

  return res.status(200).json(
    ApiResponse.success(
      "Products fetched successfully.",
      result.products,
      {
        count: result.count,
        hasMore: result.hasMore,
        nextCursor: result.nextCursor,
      }
    )
  );
});

module.exports = {
  getProducts,
};