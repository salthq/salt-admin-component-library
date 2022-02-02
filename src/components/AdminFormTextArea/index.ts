import { App, Plugin } from "vue";

import AdminFormTextArea from "./AdminFormTextArea.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormTextArea);
  },
} as Plugin;

export { AdminFormTextArea as SltAdminFormTextArea };
