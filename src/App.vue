<script setup>
import { ref, computed } from "vue";
import SimpleList from "./components/SimpleList.vue";
import Store from "./components/Store.vue";

const left = ref(400);
const mid = ref(5.564);
const right = computed(() => {
  return left.value - left.value * (mid.value / 100).toFixed(4);
});
const viewer = ref("ddd");

function handleLeftChange(e) {
  viewer.value = e.target.textContent;
  left.value = +e.target.textContent;
}
function handleMidChange(e) {
  viewer.value = e.target.textContent;
  mid.value = +e.target.textContent;
}
</script>

<template>
  <!-- <SimpleList /> -->
  <!-- <Store /> -->
  <p class="viewer">
    {{ viewer }}
  </p>
  <div class="grid">
    <p contenteditable @input="handleLeftChange($event)">{{ left }}</p>
    <p contenteditable @input="handleMidChange($event)">{{ mid }}</p>
    <p contenteditable>{{ right }}</p>
  </div>
</template>

<style lang="scss" scoped>
.viewer {
  background-color: black;
  font-size: xx-large;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  background-color: beige;
  gap: 1rem;
  p {
    background-color: dodgerblue;
    font-size: xx-large;
  }
}
</style>
