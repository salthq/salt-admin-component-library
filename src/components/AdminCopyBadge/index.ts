import { App, Plugin } from "vue";

import AdminCopyBadge from "./AdminCopyBadge.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminCopyBadge);
  },
} as Plugin;

export { AdminCopyBadge as SltAdminCopyBadge };
