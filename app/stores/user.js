import { defineStore } from "pinia";
import { ref, watch, computed } from "vue";
import { useCookie } from "#app"; // This is the correct import for Nuxt 3

export const useUserStore = defineStore("userStore", () => {
  // Create a persistent cookie with some configuration options
  const cookie = useCookie("user", {
    maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
    secure: true, // The cookie is sent only over HTTPS
    sameSite: "strict", // Protection against CSRF attacks
  });

  // Initialize the user state from the cookie if it exists
  const user = ref(cookie.value || null);

  // Watch for changes in the user state
  watch(
    user,
    (newValue) => {
      // Update the cookie when the state changes
      cookie.value = newValue;
    },
    { deep: true }
  );

  const setUser = (userData) => {
    user.value = userData;
  };

  const logout = () => {
    user.value = null;
  };

  return {
    user,
    setUser,
    logout,
  };
});
