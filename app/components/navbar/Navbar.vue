<template>
    <UContainer
        class="w-full flex items-center justify-between h-12 rounded-sm dark:bg-navbar-dark bg-navbar-light shadow-md ">
        <div>
            <NuxtLink to="/" prefetch class="flex items-center justify-center" aria-label="Vai alla home page">
                <Icon name="i-lucide-house" size="2em" aria-hidden="true" class="transition-colors">
                </Icon>
                <span class="sr-only">Home</span>
            </NuxtLink>
        </div>
        <div v-if="!loggedIn" class="flex-col ml-auto">
            <ClientOnly>
                <UToggle v-model="isDark" size="sm"
                    class="dark:bg-text-secondary-dark bg-text-secondary-light transition-colors items-center "
                    aria-label="Attiva/disattiva modalità scura" />
            </ClientOnly>
        </div>

        <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-1">
            <NuxtLink v-for="link in horizontalLinks" :key="link.to" :to="link.to" prefetch
                class="px-3 py-2 rounded-lg transition-colors dark:text-text-dark text-text-light dark:hover:bg-hover-dark hover:bg-hover-light">
                {{ link.label }}
            </NuxtLink>
        </div>

        <div class="flex-none flex items-center gap-4">
            <UDropdown v-if="loggedIn" :items="avatarDropdownItems">
                <UAvatar :src="userAvatar" alt="i-lucide-settings" icon="i-lucide-settings"
                    class="cursor-pointer border" />
                <template #toggle>
                    <ClientOnly>
                        <div class="flex items-center gap-2 justify-between w-full">
                            <UToggle v-model="isDark" size="sm"
                                class="dark:bg-text-secondary-dark bg-text-secondary-light transition-colors items-center "
                                aria-label="Dark/Light mode" />
                            <span class="text-sm dark:text-text-dark text-text-light">Theme</span>
                        </div>
                    </ClientOnly>
                </template>
            </UDropdown>
        </div>
    </UContainer>
</template>

<script setup>
import { ref, computed, onMounted, } from 'vue'

const { logout } = useLogout()
const { loggedIn, user } = useUserSession()

// User email (if logged in)
const userEmail = computed(() => loggedIn.value ? user.value?.email || 'No email' : '')
const userAvatar = computed(() => loggedIn.value ? user.value?.avatar || 'No Avatar' : '')

// Mobile menu state
const isMenuOpen = ref(false)
const closeMenu = () => (isMenuOpen.value = false)

// Logout and close menu
const logoutAndClose = () => {
    logout()
    closeMenu()
}

// Theme management
const colorMode = useColorMode()
const isDark = ref(colorMode.value === 'dark')
watch(isDark, (newValue) => {
    colorMode.preference = newValue ? 'dark' : 'light'
    colorMode.value = colorMode.preference
})

// Avatar Dropdown Items
const avatarDropdownItems = computed(() => {
    if (!loggedIn.value) return []

    return [
        [{
            label: 'Theme',
            slot: 'toggle'
        }],
        [{
            label: 'Profile',
            icon: 'i-lucide-user',
            to: '/dashboard'
        }],
        [{
            label: 'Settings',
            icon: 'i-lucide-settings',
            to: '/settings'
        }],
        [{
            label: 'Logout',
            icon: 'i-lucide-log-out',
            click: logout
        }]
    ]
})

// Sync theme with system preferences
onMounted(() => {
    if (!colorMode.preference) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        colorMode.preference = prefersDark ? 'dark' : 'light'
        colorMode.value = colorMode.preference
        isDark.value = prefersDark
    }
})

// Navbar links
const horizontalLinks = computed(() => {
    // Base links for logged users
    if (!loggedIn.value) return [];

    let links = [
        { label: "Profile", to: "/dashboard" },
    ];

    return links;
});

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