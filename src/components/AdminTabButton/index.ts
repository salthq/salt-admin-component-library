import { App, Plugin } from "vue";

import AdminTabButton from "./AdminTabButton.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminTabButton);
  },
} as Plugin;

export { AdminTabButton as SltAdminTabButton };
