
const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // Remove the useCreateIndex option as it's no longer needed
    });

    // Create indexes if necessary (optional)
    // await conn.connection.db.collection("yourCollectionName").createIndex({ yourField: 1 });

    console.log(
      `MongoDB Database Connected! ${conn.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.white);
    process.exit(1); // Exit the process if there's an error connecting to the database
  }
};

module.exports = connectDB;
