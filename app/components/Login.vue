<!-- app/pages/login.vue Login page -->
<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { useUserStore } from '../stores/user';

// Use toast to show error notification
const toast = useToast()

// Use the userStore session
const userStore = useUserStore();

// Fetch the user session
const { fetch } = useUserSession()

// Import the useUserSession composable
const { loggedIn, user, session, clear } = useUserSession()

// Get the email of the user
const email = user.value?.email?.toString() ?? 'Guest';

// Schema for the form
const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters')
})

// Type of the schema
type Schema = z.output<typeof schema>

// Reactive state for the form
const state = reactive({
    email: undefined,
    password: undefined
})

// Handle form submission
async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
        // Register the user
        const res = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                email: state.email,
                password: state.password
            },
        })

        if (!res.success) {
            toast.add({
                title: 'Login Error',
                description: res.message,
                color: 'red',
                timeout: 1500
            })
            return
        }

        // Refresh the session
        await fetch()

        // Set the user in the store
        const { user } = useUserSession()
        userStore.setUser(user.value);

        // Navigate to dashboard
        await navigateTo('/dashboard')

    } catch (error: any) {
        console.error('Login error:', error.data?.message || error.message)
        toast.add({
            title: 'Login Error',
            description: error.data?.message || "Error during login",
            color: 'red',
            timeout: 1500
        })
    }
}
</script>

<template>
    <div v-if="loggedIn">
        <h1>Welcome {{ email }}</h1>
        <p>Logged in since {{ session.loggedInAt }}</p>
        <UButton @click="() => { clear(); userStore.logout(); }">Logout</UButton>
    </div>
    <div v-else>
        <UForm :schema="schema" :state="state" class="space-y-4 flex flex-col items-center" @submit="onSubmit">
            <h1 class="text-2xl font-bold ">Login</h1>
            <UFormGroup label="Email" name="email" class="w-full">
                <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="Password" name="password" class="w-full">
                <UInput v-model="state.password" type="password" />
            </UFormGroup>

            <UButton type="submit">
                Login
            </UButton>
        </UForm>

    </div>
</template>