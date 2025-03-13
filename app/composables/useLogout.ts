// composables/useLogout.ts

// Import the user store to manage user-related state
import { useUserStore } from "~/stores/user";

// Define the return type interface for the useLogout composable
export interface UseLogoutReturn {
  // Logout function that returns a Promise
  logout: () => Promise<void>;
  // Error state that can be tracked
  error: Ref<Error | null>;
}

// Composable function to handle user logout process
export function useLogout(): UseLogoutReturn {
  // Access the user store for state management
  const userStore = useUserStore();

  // Get the clear method from user session composable
  const { clear } = useUserSession();

  // Initialize toast notification service
  const toast = useToast();

  // Create a reactive error reference
  const error = ref<Error | null>(null);

  // Async logout function with comprehensive error handling
  const logout = async () => {
    // Reset any previous errors
    error.value = null;

    try {
      // Clear the current user session
      await clear();

      // Reset user store to its initial state
      userStore.logout();

      // Redirect user to login/register page
      await navigateTo("/login");

      // Show success toast notification
      toast.add({
        title: "Logout completed successfully",
        description: "Logout completed successfully",
        color: "green",
        timeout: 1000,
      });
    } catch (e) {
      // Handle any errors during logout process
      error.value = e instanceof Error ? e : new Error("Error during logout");

      // Log the error for debugging purposes
      console.error("Error during logout:", e);
    }
  };

  // Return logout function and readonly error state
  return {
    logout,
    error: readonly(error),
  };
}
