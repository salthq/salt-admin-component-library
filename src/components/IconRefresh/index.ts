import { App, Plugin } from "vue";

import IconRefresh from "./IconRefresh.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconRefresh);
  },
} as Plugin;

export { IconRefresh as SltIconRefresh };
