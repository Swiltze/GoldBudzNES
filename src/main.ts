import './assets/main.css'
import './assets/nes.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { XButton } from '@collabcod3/pxui';

const app = createApp(App);

app.component('XButton', XButton);

app.use(router);

app.mount('#app');
