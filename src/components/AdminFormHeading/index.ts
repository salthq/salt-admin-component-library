import { App, Plugin } from "vue";

import AdminFormHeading from "./AdminFormHeading.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormHeading);
  },
} as Plugin;

export { AdminFormHeading as SltAdminFormHeading };
