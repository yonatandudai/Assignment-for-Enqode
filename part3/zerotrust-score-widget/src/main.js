// main.js
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Ensure this path is correct
import '@mdi/font/css/materialdesignicons.css'; // Optional: if using Material Design Icons
import 'vuetify/styles'; // Ensure you are importing Vuetify styles

const app = createApp(App);
app.use(vuetify);
app.mount('#app');
