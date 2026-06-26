
const encodeCursor = (product) => {
  if (!product) return null;

  const cursor = {
    updatedAt: product.updatedAt.toISOString(),
    _id: product._id.toString(),
  };

  return Buffer.from(JSON.stringify(cursor)).toString("base64");
};

const decodeCursor = (cursor) => {
  if (!cursor) return null;

  try {
    const decoded = JSON.parse(
      Buffer.from(cursor, "base64").toString("utf8")
    );

    if (!decoded.updatedAt || !decoded._id) {
      throw new Error("Invalid cursor structure.");
    }

    return {
      updatedAt: new Date(decoded.updatedAt),
      _id: decoded._id,
    };
  } catch (error) {
    throw new Error("Invalid cursor.");
  }
};

module.exports = {
  encodeCursor,
  decodeCursor,
};