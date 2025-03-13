<!-- app/pages/login.vue Login page -->
<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { useUserStore } from '~/stores/user';
import LoadingIcon from '../icon/LoadingIcon.vue';

// Initialize services
const toast = useToast()
const userStore = useUserStore();
const { fetch } = useUserSession()
const isLoading = ref(false);

// Form validation schema using Zod
const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters')
})

// Type definition from schema
type Schema = z.output<typeof schema>

// Form state
const state = reactive({
    email: undefined,
    password: undefined
})

// Form submission handler
async function onSubmit(event: FormSubmitEvent<Schema>) {
    isLoading.value = true;
    try {
        // Send login request
        const res = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                email: state.email,
                password: state.password
            },
        })

        // Handle failed login
        if (!res.success) {
            toast.add({
                title: 'Login Error',
                description: res.message,
                color: 'red',
                timeout: 1500
            })
            return
        }

        // Update session and store
        await fetch()
        const { user } = useUserSession()
        userStore.setUser(user.value);
    } catch (error: any) {
        // Handle API errors
        console.error('Login error:', error.data?.message || error.message)
        toast.add({
            title: 'Login Error',
            description: error.data?.message || "Error during login",
            color: 'red',
            timeout: 1500
        })
    } finally {
        isLoading.value = false;
    }
}
</script>

<template>
    <!-- Show loading spinner during authentication -->
    <div v-if="isLoading">
        <LoadingIcon />
    </div>
    <div v-else="isLoading">
        <!-- Login form -->
        <UForm :schema="schema" :state="state" class="space-y-4 flex flex-col items-center " @submit="onSubmit">
            <h1 class="text-2xl font-bold ">Login</h1>
            <UFormGroup label="Email" name="email" class="w-[15rem]">
                <UInput v-model="state.email" autocomplete="username" />
            </UFormGroup>
            <UFormGroup label="Password" name="password" class="w-[15rem]">
                <UInput v-model="state.password" type="password" autocomplete="current-password" />
            </UFormGroup>
            <UButton type="submit">
                Login
            </UButton>
        </UForm>
    </div>
</template>