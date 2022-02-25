import { App, Plugin } from "vue";

import AdminTabContentWrapper from "./AdminTabContentWrapper.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminTabContentWrapper);
  },
} as Plugin;

export { AdminTabContentWrapper as SltAdminTabContentWrapper };
