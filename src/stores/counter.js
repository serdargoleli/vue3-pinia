import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useAuthStore } from "./auth";

// * Birinci Kullanım Options API
/* export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 30,
  }),
  getters: {
    counterLenght: (state) => state.count.toString().length,
  },
  actions: {
    inc() {
      if (!this.isAuthenticated()) return;
      this.count++;
    },
    dec() {
      if (!this.isAuthenticated()) return;
      this.count--;
    },
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    },
  },
}); */

// * İkinci Kullanım Composition API
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const counterLenght = computed(() => {
    return count.value.toString().length;
  });

  function inc() {
    if (!isAuthenticated()) return;
    this.count++;
  }
  function dec() {
    if (!isAuthenticated()) return;
    this.count--;
  }
  function isAuthenticated() {
    const authStore = useAuthStore();
    return authStore.isAuthenticated;
  }
  return { count, counterLenght, inc, dec };
});
