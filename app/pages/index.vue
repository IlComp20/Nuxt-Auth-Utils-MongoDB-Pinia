<script setup>
import Register from '~/components/Register.vue';
import Login from '~/components/Login.vue';

const { loggedIn, user, session, clear } = useUserSession()
</script>

<template>
  <div v-if="loggedIn">
    <h1>Welcome to Index page</h1>
    <UButton @click="clear">Logout</UButton>
  </div>
  <div v-else>
    <div class="flex justify-center align-center gap-32 mt-32">
      <Register />
      <UDivider orientation="vertical" />
      <Login />
    </div>
  </div>
</template>