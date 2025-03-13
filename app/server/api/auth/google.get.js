import User from "../models/User";
import connectToDatabase from "../database/database";
export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    // Check if the user's email is already present in the database
    try {
      // Connect to the database
      await connectToDatabase();
      // Check for existing user with the same email address in the database
      const user2 = await User.findOne({
        email: user.email.toLowerCase(),
      }).lean();

      // If the user does not exist, create it
      if (!user2) {
        // Create a new user
        const newUser = new User({
          email: user.email.toLowerCase(),
        });
        // Save the user to the database
        await newUser.save();

        await setUserSession(event, {
          user: {
            email: user.email,
            id: newUser._id,
            avatar: user.picture,
          },
          loggedInAt: Date.now(),
        });
      } else {
        // Set the user session
        await setUserSession(event, {
          user: {
            email: user.email,
            id: user2._id,
            avatar: user.picture,
          },
          loggedInAt: Date.now(),
        });
      }

      return sendRedirect(event, "/dashboard");
    } catch (error) {
      console.error("Google OAuth Error:", error);

      // Error handling
      throw createError({
        statusCode: 500,
        message: "Authentication failed",
      });
    }
  },
});
