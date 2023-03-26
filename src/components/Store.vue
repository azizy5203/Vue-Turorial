<script setup lang="ts">
const products = [
  {
    id: 0,
    name: "Chips",
    desc: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    company: "Kassulke - Shields",
  },
  {
    id: 1,
    name: "Ball",
    desc: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    company: "Hickle LLC",
  },
  {
    id: 2,
    name: "Car",
    desc: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    company: "Grimes - Schmidt",
  },
  {
    id: 3,
    name: "Mouse",
    desc: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    company: "Schimmel and witz",
  },
  {
    id: 4,
    name: "Hat",
    desc: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    company: "Ziemann Corp",
  },
  {
    id: 5,
    name: "Chicken",
    desc: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    company: "Grant - Wehner",
  },
  {
    id: 6,
    name: "Gloves",
    desc: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    company: "Schaefer",
  },
  {
    id: 7,
    name: "Cheese",
    desc: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    company: "Kessler - Bailey",
  },
  {
    id: 8,
    name: "Salad",
    desc: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    company: "Kilback - Emard",
  },
  {
    id: 9,
    name: "Towels",
    desc: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    company: "Heaney and Sons",
  },
];
</script>

<template>
  <h1>Pick your favourite product</h1>
  <div class="container">
    <div class="prod-Wrapper" v-for="product in products">
      <p class="prod-id">{{ product.id }}</p>
      <h3 class="prod-name">Name : {{ product.name }}</h3>
      <p class="prod-desc">Description : {{ product.desc }}</p>
      <p class="prod-company">Company : {{ product.company }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  .prod-Wrapper {
    display: grid;
    grid-template-rows: 15% 10% 60% 10%;
    place-items: start;
    text-align: start;
    border: 1px solid #44dfb8;
    border-radius: 0.5rem;
    padding: 0.2rem 1rem;

    .prod-id {
      text-align: center;
      aspect-ratio: 1;
      width: 10%;
      background-color: #44dfb8;
      border-radius: 50%;
    }
  }
}
</style>
