import { App, Plugin } from "vue";

import AdminButton from "./AdminButton.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminButton);
  },
} as Plugin;

export { AdminButton as SltAdminButton };
