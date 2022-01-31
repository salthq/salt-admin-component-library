import { App, Plugin } from "vue";

import AdminBreadcrumbs from "./AdminBreadcrumbs.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminBreadcrumbs);
  },
} as Plugin;

export { AdminBreadcrumbs as SltAdminBreadcrumbs };
