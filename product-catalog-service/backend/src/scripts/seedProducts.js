require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = require("../config/db");

const Product = require("../models/product.model");

const categories = require("../constants/categories");

const TOTAL_PRODUCTS = 200000;

const BATCH_SIZE = 5000;

const randomPrice = () => {

    return Math.floor(Math.random() * 90000) + 100;

};

const randomCategory = () => {

    return categories[
        Math.floor(Math.random() * categories.length)
    ];

};

const randomDate = () => {

    const start = new Date(2024, 0, 1).getTime();

    const end = Date.now();

    return new Date(

        start + Math.random() * (end - start)

    );

};

const generateBatch = (startIndex, size) => {

    const products = [];

    for (let i = 0; i < size; i++) {

        const date = randomDate();

        products.push({

            name: `Product ${startIndex + i}`,

            category: randomCategory(),

            price: randomPrice(),

            createdAt: date,

            updatedAt: date,

        });

    }

    return products;

};

const seedDatabase = async () => {

    try {

        await connectDB();

        console.log("Connected");

        await Product.deleteMany();

        console.log("Old Data Deleted");

        for (

            let i = 0;

            i < TOTAL_PRODUCTS;

            i += BATCH_SIZE

        ) {

            const batch = generateBatch(

                i + 1,

                Math.min(BATCH_SIZE, TOTAL_PRODUCTS - i)

            );

            await Product.insertMany(batch);

            console.log(

                `Inserted ${Math.min(i + BATCH_SIZE, TOTAL_PRODUCTS)} / ${TOTAL_PRODUCTS}`

            );

        }

        console.log("Database Seeded Successfully");

        process.exit();

    } catch (err) {

        console.error(err);

        process.exit(1);

    }

};

seedDatabase();