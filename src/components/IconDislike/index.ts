import { App, Plugin } from "vue";

import IconDislike from "./IconDislike.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconDislike);
  },
} as Plugin;

export { IconDislike as SltIconDislike };
