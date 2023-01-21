import { defineStore } from "pinia";
import { ref, computed } from "vue";

/* export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    user: {},
  }),

  getters: {
    getFullname() {
      return this.user.first_name + " " + this.user.last_name;
    },
  },
  actions: {
    logout() {
      this.$patch((state) => {
        (state.isAuthenticated = false), (state.user = {});
      });
    },
    async login() {
      const res = await fetch(`https://reqres.in/api/users/2`);
      const { data } = await res.json();
      this.user = data;
      this.isAuthenticated = true;
    },
  },
});
 */

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const user = ref({});
  const getFullname = computed(() => `${user.first_name} ${user.last_name}`);

  function logout() {
    this.$patch((state) => {
      (state.isAuthenticated = false), (state.user = {});
    });
  }
 
  async function login() {
    const res = await fetch(`https://reqres.in/api/users/2`);
    const { data } = await res.json();
    user.value = data;
    isAuthenticated.value = true;
  }

  return { isAuthenticated, user, getFullname, logout, login };
});
