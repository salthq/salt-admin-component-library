import { App } from "vue";

import * as adminComponents from "./components/admin";
import * as icons from "./components/icons";

import { setVueInstance } from "./utils/config";
import { registerPlugin } from "./utils/plugins";

const SltAdminComponentLibrary = {
  install(app: App): void {
    setVueInstance(app);
    // Admin Components
    for (const componentKey in adminComponents) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      registerPlugin(app, (adminComponents as any)[componentKey]);
    }

    // Icons
    for (const iconKey in icons) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      registerPlugin(app, (icons as any)[iconKey]);
    }
  },
};

export default SltAdminComponentLibrary;
