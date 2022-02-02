import { App, Plugin } from "vue";

import AdminRemoveBadge from "./AdminRemoveBadge.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminRemoveBadge);
  },
} as Plugin;

export { AdminRemoveBadge as SltAdminRemoveBadge };
