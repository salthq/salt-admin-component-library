import { App, Plugin } from "vue";

import IconDashboard from "./IconDashboard.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconDashboard);
  },
} as Plugin;

export { IconDashboard as SltIconDashboard };
