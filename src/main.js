import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

import VanillaTilt from "vanilla-tilt";
createApp(App).mount("#app");

VanillaTilt.init(document.querySelector(".tilter"), {
  max: 25,
  speed: 100,
  perspective: 9000,
  gyroscope: true,
  perspective: 1000,
  reverse:true
});
