// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Ensure this path is correct
import 'vuetify/styles'; // Ensure you are using css-loader

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {},
    sets: {
      mdi: {}, // Define mdi icons here if needed
    },
  },
});

export default vuetify;
