import { App } from "vue";

import * as adminComponents from "./components/admin";
import * as icons from "./components/icons";

import { setVueInstance } from "./utils/config";
import { registerPlugin } from "./utils/plugins";

import { InertiaLink } from "@inertiajs/inertia-vue3";

import FakeInertiaLink from "./FakeInertiaLink.vue";

const SltAdminComponentLibrary = {
  install(app: App, link: InertiaLink | null): void {
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
    if (link) {
      app.component("Link", link);
    } else {
      app.component("Link", FakeInertiaLink);
    }
  },
};

export default SltAdminComponentLibrary;
