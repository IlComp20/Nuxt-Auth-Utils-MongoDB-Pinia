<!-- Default layout with header main and footer -->
<template>
    <div class="flex flex-col min-h-screen h-screen">
        <UNotifications />
        <header class="flex w-full items-center justify-center h-12 bg-gray-800 text-white">
            <h1>NAVBAR</h1>
        </header>

        <main class="flex-1 flex items-center justify-center">
            <slot />
        </main>

        <footer class="flex w-full items-center justify-center h-12 bg-gray-800 text-white">
            <div>© 2025 - All rights reserved.</div>
        </footer>
    </div>
</template>
