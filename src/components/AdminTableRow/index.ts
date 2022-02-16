import { App, Plugin } from "vue";

import AdminTableRow from "./AdminTableRow.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminTableRow);
  },
} as Plugin;

export { AdminTableRow as SltAdminTableRow };
