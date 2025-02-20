<script setup>
import Register from '~/components/auth/Register.vue';
import Login from '~/components/auth/Login.vue';

definePageMeta({
  layout: 'default'
})

const { loggedIn, clear } = useUserSession()

// To show registration component and viceversa
const change = ref(false);

</script>

<template>
  <div class="flex-1 flex items-center justify-center">
    <div v-if="loggedIn" class="flex flex-col text-center w-full items-center justify-center">
      <h1>Welcome to Index page</h1>
    </div>
    <div v-else class="flex flex-col items-center justify-center gap-8">
      <!-- Show Login or Register -->
      <component :is="change ? Register : Login" />
      <p class="text-center">
        <span v-if="change">
          Already have an account?
          <ULink @click="change = false" active-class="text-primary"
            inactive-class="text-primary hover:text-yellow-700 dark:hover:text-yellow-200">
            Login
          </ULink>
        </span>
        <span v-else>
          Don't have an account?
          <ULink @click="change = true" active-class="text-primary"
            inactive-class="text-primary hover:text-primary-700 dark:hover:text-yellow-200">
            Sign Up
          </ULink>
        </span>
      </p>
    </div>
  </div>
</template>
