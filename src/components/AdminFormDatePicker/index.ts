import { App, Plugin } from "vue";

import AdminFormDatePicker from "./AdminFormDatePicker.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormDatePicker);
  },
} as Plugin;

export { AdminFormDatePicker as SltAdminFormDatePicker };
