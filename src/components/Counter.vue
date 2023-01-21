<script setup>
  import { useCounterStore } from "@/stores/counter";
  import { storeToRefs } from "pinia";
  const counterStore = useCounterStore();
  const { count, counterLenght } = storeToRefs(counterStore);
</script>

<template>
  <div style="display: flex">
    <button @click="counterStore.inc">++</button>

    <p style="margin: 10px">Count Value: {{ count }}</p>

    <button @click="counterStore.dec">--</button>

    <p>Counter Digit Lenght: {{ counterLenght }}</p>
  </div>
</template>
