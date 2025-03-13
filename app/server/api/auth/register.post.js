import connectToDatabase from "../database/database";
import User from "../models/User";
import { z } from "zod";

export default defineEventHandler(async (event) => {
  try {
    // Connect to the database
    await connectToDatabase();

    const { email, password } = await readValidatedBody(
      event,
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
      }).parse
    );

    // Hash the password with nuxt auth utils
    const hashedPassword = await hashPassword(password);

    // Check for existing user with the same email address in the database
    const user = await User.findOne({ email: email.toLowerCase() }).lean();

    // If the user already exists, return an error
    if (user) {
      throw createError({
        statusCode: 400,
        statusMessage: "User already exists",
      });
    }

    // Create a new user
    const newUser = new User({
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    await setUserSession(event, {
      user: {
        email,
        id: newUser._id,
      },
      loggedInAt: Date.now(),
    });

    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (err) {
    if (err.statusCode && err.statusMessage) {
      throw err;
    } else {
      console.error("Errore during request:", err);
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });
    }
  }
});
