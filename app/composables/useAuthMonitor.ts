// Import the useIdle hook from @vueuse/core to detect user inactivity
import { useIdle } from "@vueuse/core";

// Define a custom composable for authentication monitoring
export const useAuthMonitor = () => {
  // Use useIdle to detect inactivity after 20 seconds
  const { idle } = useIdle(20000);

  // Import custom hooks for logout and user session management
  const { logout } = useLogout();
  const { loggedIn } = useUserSession();

  // Create a debounced function to check the session
  // This function is called with a delay to prevent multiple close calls
  const check = useDebounceFn(async () => {
    try {
      // Call API to verify the current session status
      const response = await $fetch("/api/auth/check-session");

      // If the response doesn't contain a user, it means the session has expired
      if (!response.user) {
        // Execute logout
        await logout();
      }
    } catch (error) {
      // In case of an error during verification, force logout
      await logout();
    }
  }, 20000); // 20-second delay between calls

  // Watcher that monitors idle state changes
  watch(idle, (isIdle) => {
    // Action to execute when the user becomes idle
    if (isIdle) {
      // Check if the user is currently authenticated
      if (loggedIn.value) {
        // Start session check
        check();
      }
    }
  });

  // Return the idle state for potential external use
  return {
    idle,
  };
};
