import { createApp } from 'vue';
import YoRHaUI from 'yorha-ui';
import App from './App.vue';

const app = createApp(App);

app.use(YoRHaUI);

app.mount('#app');
