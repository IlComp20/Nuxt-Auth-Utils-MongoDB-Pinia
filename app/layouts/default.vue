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

        <main class="flex-1 flex items-center justify-center">
            <slot />
        </main>

        <footer class="flex w-full items-center justify-center text-xs py-2">
            <div></div>
        </footer>
    </div>
</template>
