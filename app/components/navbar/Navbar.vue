<template>
    <UContainer class="w-full flex items-center justify-between h-12">
        <!-- Mobile menu button (only if logged in) -->
        <UButton v-if="loggedIn" @click="toggleMenu()" class="block md:hidden">
            <Icon :name="isMenuOpen ? 'typcn:times' : 'typcn:th-menu'" class="flex items-center justify-center"
                size="1.5em" />
        </UButton>

        <!-- Home link (desktop) -->
        <div class="hidden md:block">
            <ULink to="/" class="flex items-center justify-center">
                <Icon name="lsicon:house-outline" size="2.5em" />
            </ULink>
        </div>

        <!-- Horizontal navbar on desktop -->
        <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8">
            <UHorizontalNavigation :links="horizontalLinks" />
        </div>

        <!-- Right section (Toggle + Logout on desktop) -->
        <div class="flex-none flex items-center gap-4 ml-auto">
            <ClientOnly>
                <!-- Theme toggle -->
                <UToggle v-model="isDark" on-icon="i-heroicons-moon" off-icon="i-heroicons-sun" size="lg" />

                <!-- Logout on desktop (only if logged in) -->
                <p v-if="loggedIn" @click="logout"
                    class="hidden md:flex items-center gap-2 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg">
                    <Icon name="hugeicons:logout-04" size="1.4em" />
                    Logout
                </p>
            </ClientOnly>
        </div>

        <!-- Sidebar menu for mobile -->
        <transition name="slide">
            <div v-if="isMenuOpen" class="fixed inset-0 z-50 flex">
                <!-- Sidebar -->
                <div class="w-3/4 max-w-xs h-full bg-white dark:bg-gray-900 p-6 flex flex-col items-start shadow-lg">
                    <!-- Header with email and close button -->
                    <div class="w-full flex justify-between items-center mb-4">
                        <span class="text-sm font-light text-gray-300">{{ userEmail }}</span>
                        <Icon @click="closeMenu" name="typcn:times" size="2em" />
                    </div>

                    <!-- Menu items -->
                    <nav class="w-full">
                        <ul class="space-y-4">
                            <li v-for="link in verticalLinks" :key="link.to">
                                <ULink :to="link.to"
                                    class="block w-full text-left text-lg px-4 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
                                    @click="closeMenu">
                                    {{ link.label }}
                                </ULink>
                            </li>
                        </ul>
                    </nav>

                    <!-- Logout in mobile menu -->
                    <div v-if="loggedIn" @click="logoutAndClose"
                        class="mt-auto cursor-pointer flex items-center gap-2 w-full px-4 py-3 text-lg hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg justify-center">
                        <Icon name="hugeicons:logout-04" size="1.4em" />
                        Logout
                    </div>
                </div>

                <!-- Black background (click to close) -->
                <div class="flex-grow bg-black opacity-100" @click="closeMenu"></div>
            </div>
        </transition>
    </UContainer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const { logout } = useLogout()
const { loggedIn, user } = useUserSession()

// User email (if logged in)
const userEmail = computed(() => loggedIn.value ? user.value?.email || 'No email' : '')

// Mobile menu state
const isMenuOpen = ref(false)
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
const closeMenu = () => (isMenuOpen.value = false)

// Logout and close menu
const logoutAndClose = () => {
    logout()
    closeMenu()
}

// Theme management
const colorMode = useColorMode()
const isDark = computed({
    get() { return colorMode.value === 'dark' },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
        colorMode.value = colorMode.preference
    }
})

// Sync theme with system preferences
onMounted(() => {
    if (!colorMode.preference) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        colorMode.preference = prefersDark ? 'dark' : 'light'
        colorMode.value = colorMode.preference
    }
})

// Navbar links
const horizontalLinks = computed(() => loggedIn.value ? [
    { label: "Profile", to: "/dashboard" },
    { label: "Example", to: "/example" },
    { label: "Example", to: "" },
    { label: "Example", to: "" },
    { label: "Example", to: "" },
] : [])

const verticalLinks = computed(() => [...horizontalLinks.value])
</script>

<style>
/* Slide-in animation for the sidebar */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}

.slide-enter {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}
</style>
