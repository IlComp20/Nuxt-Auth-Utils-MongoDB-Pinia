<script setup>
// Define the page meta for protected pages
definePageMeta({
    layout: 'other',
})

import { useUserStore } from '@/stores/user';

// Use the userStore session
const userStore = useUserStore();

// Import the useUserSession composable
const { loggedIn, session, } = useUserSession()

const email = ref('')


// Funzione per impostare l'utente
const initializeUser = () => {
    if (userStore.user?.email) {
    } else {
        if (session.value?.user) {
            userStore.setUser(session.value.user)
            email.value = session.value.user.email || ''
        }
    }
}

// Usa watch con immediate e deep
watch(session, initializeUser, {
    immediate: true,
    deep: true
})

// Backup con onMounted
onMounted(() => {
    initializeUser()
})

</script>

<template>
    <div v-if="loggedIn">
        <div class="flex flex-col text-center w-full items-center justify-center">
            <h1>Welcome {{ email || userStore.user?.email || 'User' }}</h1>
            <p v-if="session.loggedInAt">
                You are logged in since {{ new Date(session.loggedInAt).toLocaleString() }}
            </p>
        </div>
    </div>
</template>