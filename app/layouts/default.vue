<!-- Default layout with header main and footer -->
<template>
    <div>
        <UNotifications />

        <header class="flex items-center justify-center h-12 bg-gray-800 text-white">
            <h1>NAVBAR</h1>
        </header>

        <main>
            <slot />
        </main>

        <footer class="flex justify-center ">
            <div class="flex mt-auto fixed bottom-0 w-full  text-white p-4 justify-center">© 2025 - All
                rights reserved.
            </div>
        </footer>
    </div>
</template>