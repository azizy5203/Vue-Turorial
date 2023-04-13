import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


createApp(App).mount('#app')

VanillaTilt.init(document.querySelector(".tilter"), {
    max: 25,
    speed: 100,
    perspective: 9000,
    gyroscope: true,
  });
