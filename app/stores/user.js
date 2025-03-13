// stores/user.js
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useCookie } from "#app";

export const useUserStore = defineStore("userStore", () => {
  // User cookie
  const cookie = useCookie("user", {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    secure: true,
    sameSite: "strict",
  });

  const user = ref(null);

  // Initialize user from cookie
  if (cookie.value) {
    user.value = cookie.value;
  }

  // Update cookie when user changes
  watch(
    user,
    (newValue) => {
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
