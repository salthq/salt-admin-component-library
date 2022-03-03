import { App, Plugin } from "vue";

import AdminFormButtonGroup from "./AdminFormButtonGroup.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormButtonGroup);
  },
} as Plugin;

export { AdminFormButtonGroup as SltAdminFormButtonGroup };
