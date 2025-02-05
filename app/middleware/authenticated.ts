// Middleware to ensure that the user is authenticated before accessing a route
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession();

  // Redirect the user to the login screen if they're not authenticated
  if (!loggedIn.value) {
    return navigateTo("/");
  }
});
