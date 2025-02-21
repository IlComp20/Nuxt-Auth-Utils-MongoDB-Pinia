<!--Form https://ui.nuxt.com/components/form -->
<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { useUserStore } from '~/stores/user';

// Use toast to show error notification
const toast = useToast()

// Use the userStore session
const userStore = useUserStore();

// Fetch the user session
const { fetch } = useUserSession()

const isLoading = ref(false);

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
    isLoading.value = true;
    try {
        const res = await $fetch('/api/auth/register', {
            method: 'POST',
            body: {
                email: state.email,
                password: state.password
            }
        })

        await fetch()

        if (!res.success) {
            toast.add({
                title: 'Registration Error',
                description: res.message,
                color: 'red',
                timeout: 1500
            })
            return
        }

        // Set the user in the store
        const { user } = useUserSession()
        // Add user in Pinia
        userStore.setUser(user.value)
        await navigateTo('/dashboard')

    } catch (error: any) {
        console.error('Registration error:', error.data?.message || error.message)
        toast.add({
            title: 'Error',
            description: error.data?.message || "Errore during registration",
            color: 'red',
            timeout: 1500
        })
    } finally {
        isLoading.value = false; // Ensures loading state is reset after API call completes
    }
}
</script>

<template>
    <!-- loading icon -->
    <div v-if="isLoading">
        <Icon :name="'eos-icons:loading'" />
    </div>
    <div v-else="isLoading">
        <UForm :schema="schema" :state="state" class="space-y-4 flex flex-col items-center" @submit="onSubmit">
            <h1 class="text-2xl font-bold ">Sign Up</h1>
            <UFormGroup label="Email" name="email" class="w-[15rem]">
                <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="Password" name="password" class="w-[15rem]">
                <UInput v-model="state.password" type="password" />
            </UFormGroup>

            <UButton type="submit">
                Sign Up
            </UButton>
        </UForm>
    </div>
</template>