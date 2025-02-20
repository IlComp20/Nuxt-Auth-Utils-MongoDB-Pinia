<!-- app/pages/dashboard.vue Post Login/Signin Page -->
<script setup>
// Define the page meta for protected pages
definePageMeta({
    layout: 'other'
})

import { useUserStore } from '@/stores/user';

// Use the userStore session
const userStore = useUserStore();
const email = await userStore.user?.email || '';
// Import the useUserSession composable
const { loggedIn, session, } = useUserSession()

</script>

<template>
    <div v-if="loggedIn">
        <div class="flex flex-col text-center w-full items-center justify-center">
            <h1>Welcome {{ email }}</h1>
            <p>You are logged in since {{ new Date(session.loggedInAt).toLocaleString() }}</p>
        </div>
    </div>

</template>