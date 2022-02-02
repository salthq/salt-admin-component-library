import { App, Plugin } from "vue";

import IconRemove from "./IconRemove.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconRemove);
  },
} as Plugin;

export { IconRemove as SltIconRemove };
