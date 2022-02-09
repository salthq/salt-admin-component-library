import { App, Plugin } from "vue";

import AdminTable from "./AdminTable.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminTable);
  },
} as Plugin;

export { AdminTable as SltAdminTable };
