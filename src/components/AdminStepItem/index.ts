import { App, Plugin } from "vue";

import AdminStepItem from "./AdminStepItem.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminStepItem);
  },
} as Plugin;

export { AdminStepItem as SltAdminStepItem };
