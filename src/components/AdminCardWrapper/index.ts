import { App, Plugin } from "vue";

import AdminCardWrapper from "./AdminCardWrapper.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminCardWrapper);
  },
} as Plugin;

export { AdminCardWrapper as SltAdminCardWrapper };
