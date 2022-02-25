import { App, Plugin } from "vue";

import AdminTabGroup from "./AdminTabGroup.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminTabGroup);
  },
} as Plugin;

export { AdminTabGroup as SltAdminTabGroup };
