import { App, Plugin } from "vue";

import AdminStatsCard from "./AdminStatsCard.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminStatsCard);
  },
} as Plugin;

export { AdminStatsCard as SltAdminStatsCard };
