import connectToDatabase from "../database/database";
export default defineEventHandler(async (event) => {
  // Api protected
  await requireUserSession(event);
  try {
    // Connect to the database
    await connectToDatabase();
    return "mimmo";
  } catch (err) {
    if (err.statusCode && err.statusMessage) {
      throw err;
    } else {
      console.error("Error during request:", err);
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });
    }
  }
});
