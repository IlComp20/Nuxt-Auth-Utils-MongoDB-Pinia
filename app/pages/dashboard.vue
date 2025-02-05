<!-- app/pages/dashboard.vue Post Login/Signin Page -->
<script setup lang="ts">
// Define the page meta for protected pages
definePageMeta({
    middleware: ['authenticated'],
})

import { useUserStore } from '../stores/user';

// Use the userStore session
const userStore = useUserStore();
// Import the useUserSession composable
const { loggedIn, user, session, clear } = useUserSession()

// Get the email of the user
const email = user.value?.email?.toString() ?? 'Guest';

// Watch for changes in loggedIn and redirect if not authenticated
watch(loggedIn, (newValue) => {
    if (!newValue) {
        navigateTo('/')
    }
})
</script>

<template>
    <h1>Welcome {{ email }}</h1>
    <p>Logged in since {{ session.loggedInAt }}</p>
    <UButton @click="() => { clear(); userStore.logout(); }">Logout</UButton>
</template>