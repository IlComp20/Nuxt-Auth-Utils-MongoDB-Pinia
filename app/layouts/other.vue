<script setup>
import Navbar from '~/components/navbar/Navbar.vue';
import { useAuthMonitor } from '~/composables/useAuthMonitor'
const { idle } = useAuthMonitor()
</script>

<!-- Default layout with header main and footer -->
<template>
    <div class="flex flex-col min-h-screen h-screen">
        <UNotifications />
        <Navbar />
        <main class="flex-1 mt-4">
            <slot />
        </main>

        <footer class="flex w-full items-center justify-center">
            <div>© 2025 - All rights reserved.</div>
        </footer>
    </div>
</template>
