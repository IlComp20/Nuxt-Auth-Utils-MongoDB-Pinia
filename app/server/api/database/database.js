import mongoose from "mongoose";
// cache the database connection
let cachedDb = null;

// Connect to the database
const connectToDatabase = async () => {
  // If the database connection is already cached, return it
  if (cachedDb && mongoose.connection.readyState === 1) {
    return cachedDb;
  }

  // If the database connection is not cached, create a new connection
  try {
    cachedDb = await mongoose.connect(process.env.MONGODB_URI, {});
    return cachedDb;
  } catch (error) {
    console.error("Error: Connection DB Failed:", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectToDatabase;
