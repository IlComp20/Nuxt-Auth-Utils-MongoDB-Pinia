import { useIdle } from "@vueuse/core";

export const useAuthMonitor = () => {
  const { idle } = useIdle(20000);
  const { logout } = useLogout();
  const { loggedIn } = useUserSession();
  // Debounced function to check session
  const check = useDebounceFn(async () => {
    try {
      const response = await $fetch("/api/auth/check-session");
      if (!response.user) {
        console.log("Session Expired");
        await logout();
      }
    } catch (error) {
      await logout();
    }
  }, 20000);

  // Watch for idle state changes
  watch(idle, (isIdle) => {
    if (isIdle) {
      if (loggedIn.value) {
        console.log("Check Session ");
        check();
      }
    }
  });

  return {
    idle,
  };
};
