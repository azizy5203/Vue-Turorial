import VanillaTilt from "vanilla-tilt";
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./style.css";
createApp(App).use(vuetify).mount("#app");

VanillaTilt.init(document.querySelector(".tilter"), {
  max: 25,
  speed: 100,
  perspective: 9000,
  gyroscope: true,
  perspective: 1000,
  reverse: true,
});
