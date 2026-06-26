const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "🚀 Product Catalog API Running"

    });

});

app.use("/api/products", productRoutes);

app.use(errorMiddleware);

module.exports = app;