// User model for MongoDB
import mongoose from "mongoose";

/**
 * User schema
 * @property {String} email - Email of User (unique), required.
 * @property {String} password - Password of User, required.
 */

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true }, // Index for faster search
  password: { type: String, required: true },
});

// Create a model using the schema
// If model exists, use it, otherwise create a new one
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
