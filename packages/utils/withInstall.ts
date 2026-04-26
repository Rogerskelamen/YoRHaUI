import { App, Component } from "vue";

export type SFCWithInstall<T> = T & {
  install(app: App): void
};

export const withInstall = <T extends Component>(component: T) => {
  const c = component as SFCWithInstall<T>;

  c.install = (app: App) => {
    // Only for debug
    // remember to delete when publish
    if (!c.name) {
      console.warn('Component missing name:', c);
      return;
    }

    app.component(c.name, c);
  };
  return c;
};
