import { App } from "vue";

import * as components from "./components";

import { setVueInstance } from "./utils/config";
import { registerPlugin } from "./utils/plugins";

const SltAdminComponentLibrary = {
  install(app: App): void {
    setVueInstance(app);
    // Components
    for (const componentKey in components) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      registerPlugin(app, (components as any)[componentKey]);
    }
  },
};

export default SltAdminComponentLibrary;
