<script setup>
import Register from '~/components/Register.vue';
import Login from '~/components/Login.vue';


const { loggedIn, clear } = useUserSession()

// To show registration component and viceversa
const change = ref(false);

</script>

<template>
  <div v-if="loggedIn" class="flex flex-col text-center w-full items-center justify-center">
    <h1>Welcome to Index page</h1>
    <UButton @click="clear">Logout</UButton>
  </div>
  <div v-else class="flex flex-col items-center justify-center gap-8">
    <!-- Show Login or Register -->
    <component :is="change ? Register : Login" />
    <p class="text-center">
      <span v-if="change">
        Already have an account?
        <ULink @click="change = false" active-class="text-primary"
          inactive-class="text-primary hover:text-primary-700 dark:hover:text-primary-200">
          Login
        </ULink>
      </span>
      <span v-else>
        Don't have an account?
        <ULink @click="change = true" active-class="text-primary"
          inactive-class="text-primary hover:text-primary-700 dark:hover:text-primary-200">
          Sign Up
        </ULink>
      </span>
    </p>
  </div>
</template>
