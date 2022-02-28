import { App, Plugin } from "vue";

import AdminFormUpload from "./AdminFormUpload.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormUpload);
  },
} as Plugin;

export { AdminFormUpload as SltAdminFormUpload };
