import { App, Plugin } from "vue";

import AdminLinkButton from "./AdminLinkButton.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminLinkButton);
  },
} as Plugin;

export { AdminLinkButton as SltAdminLinkButton };
