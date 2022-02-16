import { App, Plugin } from "vue";

import AdminTableSearch from "./AdminTableSearch.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminTableSearch);
  },
} as Plugin;

export { AdminTableSearch as SltAdminTableSearch };
