import { App, Plugin } from "vue";

import AdminFormInput from "./AdminFormInput.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormInput);
  },
} as Plugin;

export { AdminFormInput as SltAdminFormInput };
