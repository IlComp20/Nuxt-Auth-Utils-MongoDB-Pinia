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

    // Check for existing user with the same email address in the database
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      throw createError({
        statusCode: 400,
        statusMessage: "User does not exist",
      });
    }

    if (!(await verifyPassword(user.password, password))) {
      throw createError({ statusCode: 400, statusMessage: "Invalid Password" });
    }

    // Set the user session
    await setUserSession(event, {
      user: {
        email,
        id: user._id,
      },
      loggedInAt: Date.now(),
    });

    return {
      success: true,
      statusCode: 200,
      message: "User Loggedin successfully",
    };
  } catch (err) {
    if (err.statusCode && err.statusMessage) {
      // Errori previsti
      throw err;
    } else {
      // Errori imprevisti
      console.error("Error during request:", err);
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });
    }
  }
});
