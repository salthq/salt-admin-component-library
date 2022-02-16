import { App, Plugin } from "vue";

import AdminTablePagination from "./AdminTablePagination.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminTablePagination);
  },
} as Plugin;

export { AdminTablePagination as SltAdminTablePagination };
