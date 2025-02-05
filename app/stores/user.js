import { defineStore } from "pinia";
import { ref } from "vue";

// Define a new store
export const useUserStore = defineStore(
  "userStore",
  () => {
    // Define a reactive variable to store the user data
    const user = ref(null);

    // Define a function to set the user data
    const setUser = (userData) => {
      user.value = userData;
    };

    const logout = () => {
      user.value = null;
    };

    // Return the user data and the function to set the user data
    return {
      user,
      setUser,
      logout,
    };
  },
  {
    // Enable the persist option to cache the user data
    persist: true,
  }
);
