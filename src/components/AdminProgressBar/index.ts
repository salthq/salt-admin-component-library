import { App, Plugin } from "vue";

import AdminProgressBar from "./AdminProgressBar.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminProgressBar);
  },
} as Plugin;

export { AdminProgressBar as SltAdminProgressBar };
