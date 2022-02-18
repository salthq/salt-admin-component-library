import { App, Plugin } from "vue";

import AdminFormItemWrapper from "./AdminFormItemWrapper.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormItemWrapper);
  },
} as Plugin;

export { AdminFormItemWrapper as SltAdminFormItemWrapper };
