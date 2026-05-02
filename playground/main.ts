import YoRHaUI from '@yorha-ui/yorha-ui';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(YoRHaUI);

app.mount('#app');
