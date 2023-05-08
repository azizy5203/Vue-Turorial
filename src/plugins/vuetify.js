/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

export default createVuetify({
  components,
  directives,
  // defaults: {
  //   global: {
  //     FontFace: {
  //       fontFamily: "Poppins",
  //     },
  //   },
  // },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
          ACCEPTED: "#b1ecb8",
          REJECTED: "#e86767",
          REVIEWING: "#c2d4fa",
          ACCEPT: "#b1ecb8",
          REJECT: "#e86767",
          HOLD: "#fff8a0",
          active: "#b1ecb8",
          inactive: "#e86767",
          pending: "#fff8a0",
          approved: "#b1ecb8",
          rejected: "#e86767",
          contract: "#b1ecb8",
        },
      },
    },
  },
});
