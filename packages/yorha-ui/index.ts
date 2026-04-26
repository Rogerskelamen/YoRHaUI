import type { App } from "vue";
import YrhButton from '@yorha-ui/components/button';

const components = [YrhButton];

export const install = (app: App) => {
  components.forEach((c) => app.use(c));
};

export {
  YrhButton
};

export default {
  install
};
