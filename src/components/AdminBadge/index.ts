import { App, Plugin } from "vue";

import AdminBadge from "./AdminBadge.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminBadge);
  },
} as Plugin;

export { AdminBadge as SltAdminBadge };
