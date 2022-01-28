import { App, Plugin } from "vue";

import AdminAlertWrapper from "./AdminAlertWrapper.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminAlertWrapper);
  },
} as Plugin;

export { AdminAlertWrapper as SltAdminAlertWrapper };
