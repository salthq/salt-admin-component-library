import { App, Plugin } from "vue";

import AdminFormWrapper from "./AdminFormWrapper.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormWrapper);
  },
} as Plugin;

export { AdminFormWrapper as SltAdminFormWrapper };
