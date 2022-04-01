import { App, Plugin } from "vue";

import AdminStepWrapper from "./AdminStepWrapper.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminStepWrapper);
  },
} as Plugin;

export { AdminStepWrapper as SltAdminStepWrapper };
