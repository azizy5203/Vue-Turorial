<script setup lang="ts">
import { ref } from "vue";

let list = ref(["phone", "laptop", "pc", "cover"]);
</script>

<template>
  <h1>My List</h1>
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
