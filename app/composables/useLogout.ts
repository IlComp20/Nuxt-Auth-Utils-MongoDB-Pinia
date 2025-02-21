// composables/useLogout.ts
import { useUserStore } from "~/stores/user";

export interface UseLogoutReturn {
  logout: () => Promise<void>;
  error: Ref<Error | null>;
}

export function useLogout(): UseLogoutReturn {
  const userStore = useUserStore();
  const { clear } = useUserSession();
  const toast = useToast();
  const error = ref<Error | null>(null);

  const logout = async () => {
    error.value = null;

    try {
      // Clear session data
      await clear();
      // clear store data
      userStore.logout();

      // Navigate to login/register page
      await navigateTo("/login");

      toast.add({
        title: "Logout completed successfully",
        description: "Logout completed successfully",
        color: "green",
        timeout: 1000,
      });
    } catch (e) {
      error.value = e instanceof Error ? e : new Error("Errore during logout");
      console.error("Error during logout:", e);
    }
  };

  return {
    logout,
    error: readonly(error),
  };
}
