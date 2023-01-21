<script setup>
  import Counter from "@/components/Counter.vue";
  import { useAuthStore } from "@/stores/auth";
  import { storeToRefs } from "pinia";
  const authStore = useAuthStore();
  const { isAuthenticated, user } = storeToRefs(authStore);
</script>

<template>
  <main>
    <div v-if="isAuthenticated">
      <p>user fullname is: {{ user.first_name + " " + user.last_name }}</p>
      <p>user mail is: {{ user.email }}</p>
      <img :src="user.avatar" loading="" />
    </div>
    <Counter />
  </main>
</template>
