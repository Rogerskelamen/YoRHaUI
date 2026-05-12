import YrhButton from '@yorha-ui/components/button';
import '../theme/index.css';
import type { App } from 'vue';

const components = [YrhButton];

export const install = (app: App) => {
  components.forEach((c) => app.use(c));
};

export { YrhButton };

export default {
  install,
};
