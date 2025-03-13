<template>
    <div class="loading-icon-container">
        <svg viewBox="0 0 24 24" class="loading-icon" aria-hidden="true">
            <path :d="mdiLoading" fill="currentColor" />
        </svg>
    </div>
</template>

<script setup>
import { mdiLoading } from '@mdi/js';
</script>

<style scoped>
.loading-icon-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.loading-icon {
    width: 2rem;
    height: 2rem;
    will-change: transform;
    animation: spin 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    color: currentColor;
    transform-origin: center center;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}


@media (prefers-reduced-motion: reduce) {
    .loading-icon {
        animation-duration: 1.5s;
    }
}
</style>