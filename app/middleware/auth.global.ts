// middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to) => {
  const { loggedIn } = useUserSession();

  // Public routes
  const publicRoutes = ["/"];

  // If user is logged or is in a public routes, return
  if (loggedIn.value || publicRoutes.includes(to.path)) {
    return;
  }

  // If user is not logged and route is protected return to "/"
  return navigateTo("/");
});
