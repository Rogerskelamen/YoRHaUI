import YrhButton from '@yorha-ui/components/button';
import YrhHeading from '@yorha-ui/components/heading';
import '../theme/index.css';
import type { App } from 'vue';

const components = [YrhButton, YrhHeading];

export const install = (app: App) => {
  components.forEach((c) => app.use(c));
};

export { YrhButton, YrhHeading };

export default {
  install,
};
