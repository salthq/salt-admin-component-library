import { App, Plugin } from "vue";

import AdminTableCell from "./AdminTableCell.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminTableCell);
  },
} as Plugin;

export { AdminTableCell as SltAdminTableCell };
