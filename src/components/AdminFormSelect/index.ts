import { App, Plugin } from "vue";

import AdminFormSelect from "./AdminFormSelect.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormSelect);
  },
} as Plugin;

export { AdminFormSelect as SltAdminFormSelect };
