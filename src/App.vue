<script setup>
  import { useAuthStore } from "@/stores/auth.js";
  const authStore = useAuthStore();
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <button @click="authStore.logout" v-if="authStore.isAuthenticated">Logout</button>
    <button @click="authStore.login" v-else>Login</button>
  </nav>

  <RouterView />
</template>

<style scoped></style>
