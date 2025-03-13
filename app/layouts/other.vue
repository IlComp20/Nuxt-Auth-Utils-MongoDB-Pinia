<script setup>
import Navbar from '~/components/navbar/Navbar.vue';
import { useAuthMonitor } from '~/composables/useAuthMonitor'
const { idle } = useAuthMonitor()
</script>

<!-- Default layout with header main and footer -->
<template>
    <div class="flex flex-col min-h-screen">
        <UNotifications />
        <Navbar />
        <main class="flex-1 mt-4">
            <slot />
        </main>

        <footer class="flex w-full items-center justify-center mt-6">
            <div> </div>
        </footer>
    </div>
</template>

<style>
/* Fix scrollbar overflow (Chrome, Safari, Edge) */
html {
    overflow-y: auto;
    scrollbar-gutter: stable;
    scrollbar-width: thin;
}


html::-webkit-scrollbar {
    width: 8px;
}

html::-webkit-scrollbar:vertical {
    display: none;
}
</style>