<script setup>
import Register from '~/components/Register.vue';
import Login from '~/components/Login.vue';


const { loggedIn, clear } = useUserSession()

// To show registration component and viceversa
const change = ref(false);

</script>

<template>
  <div v-if="loggedIn">
    <h1>Welcome to Index page</h1>
    <UButton @click="clear">Logout</UButton>
  </div>
  <div v-else class="flex flex-col items-center justify-center gap-8">
    <!-- Show Login or Register -->
    <component :is="change ? Register : Login" />
    <p class="text-center text-sm sm:text-base">
      <span v-if="change">
        Already have an account?
        <ULink @click="change = false" active-class="text-green"
          inactive-class="text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-200">
          Login
        </ULink>
      </span>
      <span v-else>
        Don't have an account?
        <ULink @click="change = true"
          inactive-class="text-green-500 dark:text-green-400 hover:text-green-700 dark:hover:text-green-200">
          Sign Up
        </ULink>
      </span>
    </p>
  </div>
</template>
