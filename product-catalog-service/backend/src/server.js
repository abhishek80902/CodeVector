require("dotenv").config();

const app = require("./app");

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const start = async () => {

    try {

        await connectDB();

        app.listen(PORT, () => {

            console.log(`Server Running On Port ${PORT}`);

        });

    } catch (err) {

        console.log(err);

    }

};

start();