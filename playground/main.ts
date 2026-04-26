import { createApp } from 'vue';
import App from './App.vue';

import YoRHaUI from '@yorha-ui/yorha-ui';

const app = createApp(App);

app.use(YoRHaUI);

app.mount('#app');
