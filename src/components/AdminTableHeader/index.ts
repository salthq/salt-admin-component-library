import { App, Plugin } from "vue";

import AdminTableHeader from "./AdminTableHeader.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminTableHeader);
  },
} as Plugin;

export { AdminTableHeader as SltAdminTableHeader };
