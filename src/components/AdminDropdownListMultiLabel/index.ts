import { App, Plugin } from "vue";

import AdminDropdownListMultiLabel from "./AdminDropdownListMultiLabel.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminDropdownListMultiLabel);
  },
} as Plugin;

export { AdminDropdownListMultiLabel as SltAdminDropdownListMultiLabel };
