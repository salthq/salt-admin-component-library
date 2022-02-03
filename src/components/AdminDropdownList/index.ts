import { App, Plugin } from "vue";

import AdminDropdownList from "./AdminDropdownList.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminDropdownList);
  },
} as Plugin;

export { AdminDropdownList as SltAdminDropdownList };
