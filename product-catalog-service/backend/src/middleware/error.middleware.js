
const ApiResponse = require("../utils/apiResponse");

const errorMiddleware = (err, req, res, next) => {

    console.error("ERROR:", err.message);

    if (err.name === "CastError") {

        return res
            .status(400)
            .json(ApiResponse.error("Invalid resource ID."));

    }

    if (err.name === "ValidationError") {

        return res
            .status(400)
            .json(ApiResponse.error(err.message));

    }

    if (err.code === 11000) {

        return res
            .status(409)
            .json(ApiResponse.error("Duplicate resource."));

    }

    return res.status(err.statusCode || 500).json(

        ApiResponse.error(

            err.message || "Internal Server Error"

        )

    );

};

module.exports = errorMiddleware;