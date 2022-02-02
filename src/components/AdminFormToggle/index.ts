import { App, Plugin } from "vue";

import AdminFormToggle from "./AdminFormToggle.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormToggle);
  },
} as Plugin;

export { AdminFormToggle as SltAdminFormToggle };
